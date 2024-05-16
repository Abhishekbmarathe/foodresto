import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.js'
import bodyParser from 'body-parser';
import login from './models/login.js';
import Food from './models/addItems.js';
import path from 'path';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());
const port = 3001;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MONGODB connection successful :)")
    })
    .catch((err) => {
        console.log("MONGODB connection Failed...", err);
    })


// Body parsing middleware for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setting ejs template engine
app.set('view engine', 'ejs')
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('login.ejs');
});


app.get('/adminLogin', (req, res) => {
    // res.render('admin.ejs');
    res.render('adminPassword.ejs');
});



app.post('/myorders', async (req, res) => {

    console.log(req.body.userId);
    const orders = await User.find({ userId: req.body.userId })
    res.render('myorders.ejs', { orders: orders });
});


app.post('/admin', async (req, res) => {
    const admPass = await login.findOne({ name: "admin" })
    bcrypt.compare(req.body.password, admPass.password, async function (err, result) {
        if (err) {
            // Handle error
            console.log("Error comparing passwords:", err);
            res.status(500).send("Error comparing passwords");
        } else if (result) {
            // Passwords match, authentication successful
            const orders = await User.find({});
            res.render('admin', { orders: orders });
        } else {
            // Passwords don't match
            res.status(401).send("Incorrect password");
        }
    });

});




app.post('/signup', async (req, res) => {
    const existingRecord = await login.findOne({ email: req.body.email });
    if (!existingRecord) {
        const data = {
            name: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        const saltRounds = 10; // Number of salt rounds for bcrypt
        // Hashing password
        bcrypt.hash(data.password, saltRounds, async function (err, hash) {
            if (err) {
                // Handle error
                console.log("Error hashing password:", err);
                res.status(500).send("Error hashing password");
            } else {
                // Store `hash` in the database
                data.password = hash; // Replace plain password with hash
                await login.create(data);
                console.log(data);
                // res.render('home.ejs')
                const user = await login.findOne({ name: req.body.username });
                const foods = await Food.find({})
                const orders = await User.find({ userId: user._id });

                res.render('home', { orders: orders, userId: user._id, foods: foods });
                // res.status(201).send("User registered successfully");
            }
        });
    }
    else {
        res.render('login')
    }
})

app.post('/login', async (req, res) => {
    try {
        const user = await login.findOne({ name: req.body.username });
        if (user) {
            // console.log(user);

            // If user is found, compare hashed password
            bcrypt.compare(req.body.password, user.password, async function (err, result) {
                if (err) {
                    // Handle error
                    console.log("Error comparing passwords:", err);
                    res.status(500).send("Error comparing passwords");
                } else if (result) {
                    // Passwords match, authentication successful
                    const orders = await User.find({ userId: user._id });
                    const foods = await Food.find({});
                    res.render('home', { orders: orders, userId: user._id, foods: foods });

                } else {
                    // Passwords don't match
                    res.status(401).send("Incorrect password");
                }
            });
        } else {
            // User not found
            // console.log(user);
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});




// post methods
app.post('/cart', (req, res) => {
    res.render('my-cart.ejs');
})
app.post('/order', (req, res) => {
    res.render('order.ejs');
})
app.post('/submit', async (req, res) => {
    const data = req.body;
    const user = new User(data);
    await user.save()
    console.log(data);
    res.render('thankyou.ejs');
})

// admin related methods
app.post("/additems", (req, res) => {
    res.render("add-items")
})

app.post("/additemsC", async (req, res) => {
    const { name, description, servings, price } = req.body; // Destructure the properties from req.body directly
    console.log({ name, description, servings, price }); // Log the properties for debugging

    try {
        const food = new Food({ name, description, servings, price }); // Create a new Food instance with the extracted properties
        await food.save(); // Save the food item to the database
        res.send("Item added successfully");
    } catch (error) {
        console.error("Error adding item:", error); // Log any errors that occur during the save operation
        res.status(500).send("Error adding item"); // Send an error response if something goes wrong
    }
});



app.listen(port, () => {
    console.log("server is running on port: ", port);
})
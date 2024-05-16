let chef_img = document.querySelectorAll(".chef-img");
let infoCont = document.querySelectorAll(".member-info");

chef_img.forEach((img,i1)=>{
    img.addEventListener("mouseover",()=>{
        infoCont.forEach((info,i2)=>{
            if(i1==i2){
                info.classList.add("transform");
            }
        })
    })
})
chef_img.forEach((img,i1)=>{
    img.addEventListener("mouseout",()=>{
        infoCont.forEach((info,i2)=>{
            if(i1==i2){
                info.classList.remove("transform");
            }
        })
    })
})
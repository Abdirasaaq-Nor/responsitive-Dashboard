const  currenTitle = document.title

window.addEventListener('blur', () => {
        document.title = 'you are away'
        
})


window.addEventListener('focus', () => {
        document.title = currenTitle;
})


const toggle  = document.querySelector('#toggle')
const nav_item = document.querySelector('.nav_item')
const right_bottom_side = document.querySelector('.right_bottom_side')




toggle.addEventListener('click', () => {
        if(nav_item.style.display == "block"){
                nav_item.style.display = 'none'
                right.style.margin = "0px 0px 0px 60px"
              
               
              
        }else{
                nav_item.style.display = 'block'
                right.style.margin = "0px 0px 0px 220px"
    
                
                
        }
        
})




const image_toggle = document.querySelector('#image_toggle')
const admin_info  = document.querySelector('.admin_info')
image_toggle.addEventListener('click', () => {
        if(admin_info.style.display == 'none'){
                admin_info.style.display = 'block'
        }else{
                admin_info.style.display = 'none'
        }
})


// toggle.addEventListener('click', () => {
//         if(nav_item.classList.contains('nav_item')){
//                 nav_item.style.display = 'none'
//         } else{
//                 nav_item.style.display = "block"
//         }
// })
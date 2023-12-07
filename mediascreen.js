
//  when scrolled down - display bg-white on navbar
window.addEventListener('scroll', function(){
    let navBar = document.querySelector('.navbar')
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        navBar.classList.add('bg-light')
    }else{
        navBar.classList.remove('bg-light')
    }
})


// to toggle the menu- bar
    const menuBar = document.querySelector(".menu-bar")
    menuBar.addEventListener("click", function(){
        let middleBar = document.querySelector("#middle-bar")
        middleBar.classList.toggle("active")
        menuBar.classList.toggle("active")
        document.querySelector('.user-order').classList.remove('active')
        document.querySelector('.user-account').classList.remove('active')
    })

    // for user account

    const userIcon = document.querySelector('#user-icon')
    userIcon.addEventListener('click', function(){
        let userAccount = document.querySelector('.user-account')
        userAccount.classList.toggle('active')
        document.querySelector('.user-order').classList.remove('active')
    })

    // for user carts

    const cartIcon = document.querySelector('#cart-icon')
    cartIcon.addEventListener('click', function(){
        let userOrder = document.querySelector('.user-order')
        userOrder.classList.toggle('active')
        document.querySelector('.user-account').classList.remove('active')
    })

    // for banners categories

    const allAttire = document.querySelector('.all-attire')
     allAttire.addEventListener('click', function(evt){
        var allAttire = evt.target
        let allFeature = document.querySelector('.all-feature')
        allFeature.classList.toggle('active')
    })


    
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
    document.querySelector('#close-login-form').classList.toggle('active');
}





document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
    document.querySelector('#close-login-form').classList.remove('active');
}
window.onscroll = () =>{

    if(window.scrolly > 0){
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');

    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



window.onload = () =>{

    if(window.scrolly > 0){
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');

    }
 
}


// Animação carro

// document.querySelector('.home').onmousemove = (e) => {
//  document.querySelectorAll('.home-parallax').forEach(elm =>{

//       let speed = elm.getAttribute('data-speed');

 //      let x = (window.innerWidth - e.pageX * speed) / 90;
 //     let y = (window.innerHeight - e.pageY * speed) / 90;

 //      elm.style.transform = 1 `translateX(${y}px) translateY(${x}px)`;

 // });

 // }

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      grapCursor: true,
      centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      grapCursor: true,
      centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });

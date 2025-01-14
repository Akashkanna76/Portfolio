document.querySelector(".w-o").addEventListener("mouseover", function() {
    document.querySelector("#project-name").innerHTML = "Mansoo landing page";
    document.querySelector("#project-cap").innerHTML = "A simple and responsive landing page design";

});
document.querySelector(".w-tw").addEventListener("mouseover", function() {
    document.querySelector("#project-name").innerHTML = "Stop watch";
    document.querySelector("#project-cap").innerHTML = "Quick and effective Stop watch with millisecond";
    
});
document.querySelector(".w-th").addEventListener("mouseover", function() {
    document.querySelector("#project-name").innerHTML = "To-Do list";
    document.querySelector("#project-cap").innerHTML = "Simple and user friendly To-Do list app";

});
document.querySelector(".w-f").addEventListener("mouseover", function() {
    document.querySelector("#project-name").innerHTML = "E-commerce";
    document.querySelector("#project-cap").innerHTML = "The best e-commerce webpage for my own brand";

});

// animation

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('#section-1');
    elements.forEach(element => {
      element.classList.add('visible');
    });
  });
  
  function handleScroll() {
    const elements = document.querySelectorAll('#section-1>img , .about-img ,#services>div ');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('DOMContentLoaded', handleScroll);
  


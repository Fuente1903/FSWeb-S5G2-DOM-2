import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(element=>{
    element.addEventListener("click", (e) => {
        e.target.style.color = "red";
        e.preventDefault();
    })
    element.addEventListener("mouseover", (e) => {
        e.target.style.color = "blue";
    
    });
    element.addEventListener("mouseout", (e) => {
        e.target.style.color = "black";
    
    });
});

const head1 = document.querySelector("h1");

head1.addEventListener("mouseover", (e) => {
    e.target.style.color = "#17A2B8";
    e.target.style.cursor = "pointer";
    e.target.textContent = "Eğlence Otobüsü!";
    e.target.style.fontSize = "4.5rem";

});

head1.addEventListener("mouseout", (e) => {
    e.target.style.color = "black";
    e.target.textContent = "Eğlence Otobüsü";
    e.target.style.fontSize = "4rem";
});

const buton = document.querySelectorAll(".btn");
buton.forEach(element=>{
    element.addEventListener("mouseover", (e) => {
        e.target.style.color = "#17A2B8";
        e.target.style.fontSize = "3rem"        
    });
    element.addEventListener("mouseout", (e) => {
        e.target.style.color = "white";
        e.target.style.fontSize = "2.5rem"        
    });

    element.addEventListener("click", (e) => {
        e.target.textContent = "! ! !";
        
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const logoHeading = document.querySelector(".logo-heading");
    logoHeading.addEventListener("dblclick", function() {
      alert("Logo başarıyla çift tıklandı!");
    });
  
    const introImage = document.querySelector(".intro img");
    introImage.addEventListener("mouseenter", function() {
      this.style.transform = "scale(1.2)";
    });
    introImage.addEventListener("mouseleave", function() {
      this.style.transform = "scale(1)";
    });
  
    const contentSection = document.querySelector(".content-section");
    const textContent = contentSection.querySelector(".text-content");
    const imgContent = contentSection.querySelector(".img-content");
    textContent.addEventListener("click", function() {
      this.style.backgroundColor = "blue";
    });
    imgContent.addEventListener("click", function() {
      this.style.backgroundColor = "red";
    });
  
    const contentDestination = document.querySelector(".content-destination");
    const destinationImage = contentDestination.querySelector("img");
    destinationImage.addEventListener("load", function() {
      alert("Resim başarıyla yüklendi!");
    });
  
    const destinationButtons = document.querySelectorAll(".destination .btn");
    destinationButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const destinationTitle = this.previousElementSibling.textContent;
        alert("Butona tıklandı: " + destinationTitle);
      });
    });
  
    const footer = document.querySelector(".footer");
    footer.addEventListener("mousemove", function(e) {
      const xPos = e.clientX;
      const yPos = e.clientY;
      this.textContent = `Mouse pozisyonu: X=${xPos}, Y=${yPos}`;
    });
  
    window.addEventListener("beforeunload", function(e) {
      e.preventDefault();
      e.returnValue = "";
    });
  });
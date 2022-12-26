var mainContainer = document.querySelector(".rate-container");

var thankYouContainer = document.querySelector(".thanks-for-rate");

var submitButton = document.getElementById("submit");

var rating = document.getElementById("rating");

var rates = document.querySelectorAll(".btn-rates");

submitButton.addEventListener("click", ()=>{
   thankYouContainer.classList.remove("hidden");
   mainContainer.classList.add("hidden");
});

rates.forEach(function(rate){
  rate.addEventListener("click", function(){
    rating.innerHTML = rate.innerHTML ;
  });
});
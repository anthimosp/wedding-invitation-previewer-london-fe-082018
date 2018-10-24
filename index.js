document.addEventListener("DOMContentLoaded", function(e) {
  document.getElementById("FloralButton").addEventListener("click", function(){
    document.getElementById("Rings").style.display = "none";
    document.getElementById("Floral").style.display = "inline-block";
    document.getElementById("Pink").style.display = "none";
  });
  
    document.getElementById("RingsButton").addEventListener("click", function(){
    document.getElementById("Rings").style.display = "inline-block";
    document.getElementById("Floral").style.display = "none";
    document.getElementById("Pink").style.display = "none";
  });
  
    document.getElementById("PinkButton").addEventListener("click", function(){
    document.getElementById("Rings").style.display = "none";
    document.getElementById("Floral").style.display = "none";
    document.getElementById("Pink").style.display = "inline-block";
  });
  
  document.getElementById("").addEventListener("keypress", function(){
    
  });
})
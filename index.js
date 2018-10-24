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
  
  document.getElementById("FirstNamePopulate").addEventListener("keypress", function(e){
    document.getElementById("FirstNameFloat").innerHTML = document.getElementById("FirstNamePopulate").value ;
  });
  
    document.getElementById("SecondNamePopulate").addEventListener("keypress", function(e){
    document.getElementById("SecondNameFloat").innerHTML = document.getElementById("SecondNamePopulate").value ;
  });
  
    document.getElementById("LastNamePopulate").addEventListener("keypress", function(e){
    document.getElementById("LastNameFloat").innerHTML = document.getElementById("LastNamePopulate").value ;
  });
  
    document.getElementById("DatePopulate").addEventListener("keypress", function(e){
    document.getElementById("DateFloat").innerHTML = document.getElementById("DatePopulate").value ;
  });
  
    document.getElementById("LocationPopulate").addEventListener("keypress", function(e){
    document.getElementById("LocationFloat").innerHTML = document.getElementById("LocationPopulate").value ;
  });
})
/smooth scroll for website/
/I am writing for the navbar smooth scroll/
  var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
 for(var i=0; i<navMenuAnchorTags.length; i++){
   navMenuAnchorTags[i].addEventListener('click',function(event){
 event.preventDefault();
     var targetSectionID =this.textContent.trim().toLowerCase(); 
     var targetSection = document.getElementById(targetSectionID);
     var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClient();
       
          if(targetSectionCoordinates.top <=0){
            clearInterval(interval);
          }
       window.scrollBy(0,50);
        },20);
   });
 }


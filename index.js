/smooth scroll for website/
/I am writing for the navbar smooth scroll/
  var interval;
  var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
 for(var i=0; i<navMenuAnchorTags.length; i++){
   navMenuAnchorTags[i].addEventListener('click',function(event){
 event.preventDefault();
     var targetSectionID =this.textContent.trim().toLowerCase(); 
     var targetSection = document.getElementById(targetSectionID);
     var interval = setInterval(scrollVertically ,20,targetSection);
      
   });
 }
/SCROLL VERTCIALLY/
function scrollvertcially(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClient();
       
          if(targetSectionCoordinates.top <=0){
            clearInterval(interval);
            return ;
          }
       window.scrollBy(0,50);
        },20);
     

\skills progress  function\
var progressbars =document.querySelector('.skill-progress>div');
var skillcontainers=document.getElementById('skills-container');
window.addEventListener('scroll,checkScroll);
var animation = false;
 function initialiseBars(){
  for(let bar of progressBars){
    bar.style.width=0+'%'
  }
 initialiseBars();
function  fillBars(){
  for(let bar of progressBars){
     bar.style.width=0+'%';
function checkScroll(){
var coordinates =skillsContainer.getBoundingClientRect();
  if(!animationDone&&coordinates.top<window.innerHeight){
    animationDone = true;
    console.log('skills section visible');
  }
}

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
/student function/
 
 function createStudent(name,rollNo,marks){
 var student={};
 student.name= name;
 student.rollNo  =rollNo;
 student.marks=marks;
 return student;
 }
 var student1= createStudent("abcd",15,50);
 var student2 = createStudent("pqrs",20,77);   

 \write in a constructor\
 function createStudent(name,rollNo,marks){
   this.name=name;
   this.rollName=rollName;
   this.marks=marks;
 }
    var student = new createStudent("abcd",15,50);
\write a  class\
class Vehicle{
  constructor(numWheels, price){
    this.numWheels =numWheels;
    this.price=price;
  }
  getprice(){
    return this.price;
}
\inhertiance\
  class car extends Vehicle{
 constructor(numDoors){
   super(4,10000);
   this.numDoors = numDoors;
 }
    printDescription(){
      super.printDescription();
      console.log("car",numdoors);
    
  }
    var c= new car (40000,4);
    console.log(c);
\ fetch details by using api using ajax\
.get('https://dog.ceo/api/breeds/image/random',function(data){{
  var imageurl= responseJson.message;
     $('#dog-image').attr('src',imageurl);
}});
 
 $('#fetch-dog-image-button').click(fetchRandomDogImage);

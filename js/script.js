const date =new Date();//creating a date object to get today date 
alert("Welcome to Ghada Protfile The Date is: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
//using alert to show a pop up messige contining welcome and the date using 
//date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear() methods
let logedIn=localStorage.getItem("logedIn")//accsising local storege to cheke logedin
let userName=localStorage.getItem("Name")// if loged in get name
if(logedIn!=="yes"){//if not loged in get name and save it and change loged in to yes to keep the same name
  localStorage.setItem("logedIn","yes")
  userName=window.prompt("What is your Name?")
  localStorage.setItem("Name",userName)
}
alert("Welcome "+userName);//a welcome message




// get the the button from the html file
const button1 =document.getElementById("all");
const button2 =document.getElementById("Web_Devalpment");
const button3 =document.getElementById("Hardwarye_Design");
const button4 =document.getElementById("System");
// Geting the boxses that containe diffrent projuects 
const boxes = document.getElementsByClassName("box");

//a function to hide or display the projucts
function filter_projuct(type){
    for (let i = 0; i < boxes.length; i++) {//go over all the boxses one by one
      const element = boxes[i];
      const boxType = element.getAttribute("data-name"); // Get the tpey of element based on what is put in html file
      if (type === "all" || boxType === type) {//remove the css hide class if the element is the same type or the type is all
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");//if not all or not the same type add css class hide
      }
}
}
button1.addEventListener("click", function(){filter_projuct("all")})//if button1 do the function with type all
button2.addEventListener("click", function(){filter_projuct("Web_Devalpment")})//if button2 do the function with type Web_Devalpment
button3.addEventListener("click", function(){filter_projuct("Hardwarye_Design")})//if button3 do the function with type Hardwarye_Design
button4.addEventListener("click", function(){filter_projuct("System")})//if button4 do the function with type System

const button5 =document.getElementById("cat");//button for grnarating new fact
const fact =document.getElementById("fact");//the p element that we will change

button5.addEventListener("click", function (){//if button clicked fetch from a puplice API
fetch("https://meowfacts.herokuapp.com/")
  .then(function (response) {
    if (!response.ok) {     //checkes for error in fetching 
      throw new Error("HTTP " + response.status);
    }
    return response.json();           
  })
  .then(function (data) {//fetch data
    console.log(data)
    fact.innerHTML=data.data[0] //changing the <p> in the html with the new data
  })
  .catch(function (err) {
    fact.innerHTML="there is an error";//handilling the error
  });

});


//for failtiring based on cliked raido btn 
const items = document.querySelectorAll(".box2");
function filterProjects(type) {
  items.forEach(el => {
    const level = el.getAttribute("data-name");
    if (type === "all" || level === type) {
      el.classList.remove("hide");
    } else {
      el.classList.add("hide");
    }
  });
}
//if any of the raido btn are clicked enter the function to fillter
document.querySelector(".fillter_btn2").addEventListener("change", (e) => {
  if (e.target.name === "level") {
    filterProjects(e.target.value);
  }
});
//geting the btn and Discraption paragraph
const but1 =document.getElementById("show1");
const message1=document.getElementById("Discraption")
const but2 =document.getElementById("show2");
const message2=document.getElementById("Discraption2")
const but3 =document.getElementById("show3");
const message3=document.getElementById("Discraption3")

//in the function we will either hide or show the message based on the current state (we also change the btn message) 
function show_message(message1,btn) {
    if( message1.classList=="hide"){
      message1.classList.remove("hide");
    btn.innerHTML="Hide Discraption"
}
    else{
        message1.classList.add("hide");
        btn.innerHTML="Show Discraption"
    }
}
but1.addEventListener("click", function(){show_message(message1,but1)})//entiring the function for each btn  
but2.addEventListener("click", function(){show_message(message2,but2)})
but3.addEventListener("click", function(){show_message(message3,but3)})

//dark and light mode
let darkmode=localStorage.getItem("darkmode")
const them_btn=document.getElementById("them-btn")
//to change the page style to dark by adding a new class to the body called darkmode also saving changes
const doDarkmode=()=>{
  document.body.classList.add("darkmode")
  localStorage.setItem("darkmode","on")
}
//to change the page style to light by removing darkmode also saving changes
const noDarkmode=()=>{
  document.body.classList.remove("darkmode")
  localStorage.setItem("darkmode",null)
}
//to apply the dark mode if it is the defualt
if(darkmode==="on"){
  doDarkmode()
}
//if statment to choose betwwen the two functions when a btn is clicked
them_btn.addEventListener("click", ()=>{
  darkmode=localStorage.getItem("darkmode")
  darkmode!=="on"?doDarkmode():noDarkmode();
})

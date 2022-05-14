
// NIGHT MODE // 
const btnNuit = document.querySelector("#nightMode");
const btnJour = document.querySelector("#lightMode")

btnNuit.addEventListener('click',() => {
    document.querySelector('body').style.backgroundColor = "#34283d";
    btnNuit.style.visibility = "hidden";
    btnJour.style.visibility = "visible"
})
btnJour.addEventListener('click',() => {
    document.querySelector('body').style.backgroundColor = "white";
    btnNuit.style.visibility = "visible";
    btnJour.style.visibility = "hidden"
})


// QUESTION 1 // 

const questionContainer1= document.querySelector(".q1");
const q1Resume = document.querySelector("#q1PaintView > .artistResume");
const btn11 = document.querySelector("#btn11");
const btn12 = document.querySelector("#btn12");
const btn13 = document.querySelector("#btn13");
const btn14 = document.querySelector("#btn14");


questionContainer1.addEventListener('click',(e) => {
    answer1 = e.target.textContent;
     if (answer1 == "Frida Khalo"){
         btn11.style.background = "#8ebf9e"; 
        q1Resume.classList.add('artistResumeAnswer')
    }})

 questionContainer1.addEventListener('click',(e) => {
        answer1 = e.target.textContent;
         if (answer1 == "Aurora Reyes"){
             btn12.style.background = "#ac5353"; 
       } })

questionContainer1.addEventListener('click',(e) => {
        answer1 = e.target.textContent;  
         if (answer1 == "Emilia Ortiz"){
             btn13.style.background = "#ac5353"; 
          }})

questionContainer1.addEventListener('click',(e) => {
            answer1 = e.target.textContent;      
             if (answer1 == "Rosa Bonheur"){
                 btn14.style.background = "#ac5353"; 
           }})

// QUESTION 2 //

const questionContainer2= document.querySelector(".q2");
const q2Resume = document.querySelector("#q2PaintView > .artistResume");
const btn21 = document.querySelector("#btn21");
const btn22 = document.querySelector("#btn22");
const btn23 = document.querySelector("#btn23");
const btn24 = document.querySelector("#btn24");

questionContainer2.addEventListener('click',(e) => {
   answer2 = e.target.textContent;
   if (answer2 =='L\'artiste aux pois') { 
       btn21.style.background = "#8ebf9e"; 
       q2Resume.classList.add('artistResumeAnswer');   
   }})

questionContainer2.addEventListener('click',(e) => {
    answer2 = e.target.textContent;
    if (answer2 =='L\'artiste surréaliste') { 
        btn22.style.background = "#ac5353"; 
    }})  

questionContainer2.addEventListener('click',(e) => {
        answer2 = e.target.textContent;
        if (answer2 =='L\'artiste de coeur') { 
            btn23.style.background = "#ac5353"; 
        }})  

questionContainer2.addEventListener('click',(e) => {
            answer2 = e.target.textContent;
            if (answer2 =='L\'artiste arc-en-ciel') { 
                btn24.style.background = "#ac5353"; 
            }}) 
  


// QUESTION 3 //

const questionContainer3= document.querySelector(".q3");
const q3Resume = document.querySelector("#q3PaintView > .artistResume");
const btn31 = document.querySelector("#btn31");
const btn32 = document.querySelector("#btn32");
const btn33 = document.querySelector("#btn33");
const btn34 = document.querySelector("#btn34");
let answer3="";

questionContainer3.addEventListener('click',(e) => {
   answer3 = e.target.textContent;
   if (answer3 =='Barbara Kruger') { 
       btn33.style.background = "#8ebf9e"; 
       q3Resume.classList.add('artistResumeAnswer')  
   }});

questionContainer3.addEventListener('click',(e) => {
    answer3 = e.target.textContent;
    if (answer3 =='Kara Walker') { 
        btn31.style.background = "#ac5353"; 
    }});

questionContainer3.addEventListener('click',(e) => {
        answer3 = e.target.textContent;
        if (answer3 =='Jebbia James') { 
            btn32.style.background = "#ac5353"; 
        }});
        
questionContainer3.addEventListener('click',(e) => {
            answer3 = e.target.textContent;
            if (answer3 =='Eva Hesse') { 
                btn34.style.background = "#ac5353"; 
            }});



// QUESTION 4 //

const questionContainer4= document.querySelector(".q4");
const q4Resume = document.querySelector("#q4PaintView > .artistResume");
const inputText = document.querySelector("#input4");
let answer4="";

inputText.addEventListener('input',(e) => {
   answer4 = e.target.value;
console.log(answer4)

   if (answer4 == "Yoko Ono") { 
       input4.style.background = "#8ebf9e"; 
       q4Resume.classList.add('artistResumeAnswer')
        answer2="true";
   } else { 
       input4.style.background = "#ac5353";
       q4Resume.classList.add('artistResumeAnswer');
       answer3 ="false";
   }
});
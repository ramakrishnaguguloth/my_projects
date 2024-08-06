let menu=document.querySelector('#menu-icon');
let nav=document.querySelector('.navbar');
menu.onclick =() =>{
    menu.classList.toggle("bx-x");
    nav.classList.toggle("active");
}
window.onscroll=() =>{
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    

}
function call1()
{   
    document.getElementById('active1').style.color='#00abf0';
document.getElementById('active2').style.color='white';
document.getElementById('active5').style.color='white';
document.getElementById('active3').style.color='white';
document.getElementById('active4').style.color='white';
}
function call2()
{
    
    document.getElementById('active1').style.color='white';
    document.getElementById('active3').style.color='white';
    document.getElementById('active4').style.color='white';
    document.getElementById('active5').style.color='white';
document.getElementById('active2').style.color='#00abf0';
}
function call3()
{
    
    document.getElementById('active1').style.color='white';
    document.getElementById('active2').style.color='white';
    document.getElementById('active4').style.color='white';
    document.getElementById('active5').style.color='white';
document.getElementById('active3').style.color='#00abf0';
}
function call4()
{
   
    document.getElementById('active1').style.color='white';
    document.getElementById('active2').style.color='white';
    document.getElementById('active3').style.color='white';
    document.getElementById('active5').style.color='white';
document.getElementById('active4').style.color='#00abf0';
}
function call5()
{
    
    document.getElementById('active1').style.color='white';
    document.getElementById('active2').style.color='white';
    document.getElementById('active3').style.color='white';
    document.getElementById('active4').style.color='white';
document.getElementById('active5').style.color='#00abf0';
}
function main(){
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    
}


/*const  age =document.getElementById('age1');



function fun1()
{
    console.log(age).innerHtml =txt1.value;
}*/

/*function lifeInWeeks(age1)
{




x=(90-age1);
y=x*365;
z=x*52;
k=x*12;

console.log(`${y}  days ${z} weeks ${k} months`);
}
console.log(document.getElementById("age1"));*/


function getVal() {
    const age = document.getElementById('jk').value;
 
    console.log(age);
  }

  function getHeight(){
    const height=document.getElementById('height1').value;
    console.log(height);
  }

  function getWeight(){
    const weight=document.getElementById('weight1').value;
    console.log(weight);
  }

  function calBmi(){
    const bmi=weight/(height*height);
    console.log(bmi);
  }

  const out1=document.getElementById('out1');

function outing(){
    out1.innerHtml = bmi;
}


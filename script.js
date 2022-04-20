function addNewWEField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField()
{
    let newNode1=document.createElement('textarea');
    newNode1.classList.add('form-control');
    newNode1.classList.add('aqField');
    newNode1.classList.add('mt-2');
    newNode1.setAttribute('placeholder', 'Enter here');

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode1, aqAddButtonOb)
}

//generating CV
function generateCV()
{
   let nameField=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1");

   nameT1.innerHTML=nameField;

   //direct
   document.getElementById('nameT2').innerHTML=nameField;

   //contact
   document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;

   //address
   document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;

   //social links
   document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;
   document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;
   document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value;
   document.getElementById('gitT').innerHTML=document.getElementById("gitField").value;

   //objective
   document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value;

   //work experience
   let wes=document.getElementsByClassName('weField');
   let str="";

   for(let e of wes)
   {
       str=str+`<li> ${e.value} </li>`;
   }

   document.getElementById('weT').innerHTML=str;

   //academic qualification
   let aqs=document.getElementsByClassName('aqField');
   let str1="";

   for(let a of aqs)
   {
       str1=str1+`<li> ${a.value} </li>`;
   }

   document.getElementById('aqT').innerHTML=str1;

   //code for setting image
   let file=document.getElementById('imgField').files[0];
   console.log(file);
   let reader=new FileReader()
   reader.readAsDataURL(file);
   console.log(reader.result);

   //set image into template
   reader.onloadend=function(){
    document.getElementById('imgTemplate').src=reader.result;
   }

   document.getElementById('cv-form').style.display='none';
   document.getElementById('cv-template').style.display='block';
}

//print cv
function printCV()
{
    window.print();
}
function addNewSkillField()
{
  let newNode=document.createElement("textarea");
  
  newNode.classList.add("form-control");
  newNode.classList.add("mt-2");
  newNode.classList.add("skField");
  newNode.setAttribute("rows",1);
  newNode.setAttribute("placeholder","Enter here");

  
  let skOb=document.getElementById("ski");
  let skillsAddButtonOb = document.getElementById("skillsAddButton");

  skOb.insertBefore(newNode,skillsAddButtonOb);
  
}

function addNewcommField()
{
  let newNode=document.createElement("textarea");
  
  newNode.classList.add("form-control");
  newNode.classList.add("cmField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",1);
  newNode.setAttribute("placeholder","Enter here");

  
  let cmOb = document.getElementById("comm");
  let commAddButtonOb = document.getElementById("commAddButton");

  cmOb.insertBefore(newNode,commAddButtonOb);
  
}

// generating CV

function generateCV()
{
  
  document.getElementById("nameT").innerHTML=document.getElementById("nameField").value;

  document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;

  document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

  document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

  document.getElementById("dobT").innerHTML=document.getElementById("dobField").value;

  document.getElementById("mailT").innerHTML=document.getElementById("mailField").value;

  document.getElementById("mailT").innerHTML=document.getElementById("mailField").value;

  document.getElementById("compT").innerHTML=document.getElementById("companynameField").value;

  document.getElementById("posT").innerHTML=document.getElementById("positionField").value;

  document.getElementById("durT").innerHTML=document.getElementById("durationField").value;

  document.getElementById("insT").innerHTML=document.getElementById("institutionnameField").value;

  document.getElementById("subT").innerHTML=document.getElementById("streamField").value;

  document.getElementById("duraT").innerHTML=document.getElementById("duratField").value;


  //skill

  let sks=document.getElementsByClassName("skField")

  let str=''

  for(let e of sks)
  {
    str=str +`<li> ${e.value} </li>`;
  }
  document.getElementById("skillT").innerHTML=str;


  //language

  let cms=document.getElementsByClassName("cmField")

  let str1=''

  for(let e of cms)
  {
    str1=str1 +`<li> ${e.value} </li>`;
  }
  document.getElementById("langT").innerHTML=str1;




  document.getElementById("resume-form").style.display="none";
  document.getElementById("resume-template").style.display="block";

}

// print  CV

function printCV()
{
  window.print();
}
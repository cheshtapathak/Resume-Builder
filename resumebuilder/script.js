// alert("loading");
function addNewWEField(){
    // console.log("Adding New Field");

    // creating new node 
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb = document.getElementById("we");
    
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter Here");

    let aqOb = document.getElementById("aq");
    
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,  aqAddButtonOb);
}

// generate resume
function generateResume() {
    // console.log("generate resume");
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    // direct
    document.getElementById("nameT2").innerHTML = nameField;
    // contact
    document.getElementById("contactT").innerHTML = docuument.getElementById("contactField").value;
    // address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("linkedinT").innerHTML=document.getElementById("linkedinField").value;

    document.getElementById("githubT").innerHTML=document.getElementById("githubField").value;

    document.getElementById("leetcodeT").innerHTML=document.getElementById("leetcodeField").value;
}
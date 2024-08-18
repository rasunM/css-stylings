let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let fatherName = document.getElementById("fatherName");
let fatherContact = document.getElementById("fatherContact");
let studentID = document.getElementById("studentID");
let className = document.getElementById("class");
let studentAddress = document.getElementById("studentAddress");
let submitButton = document.getElementById("submit");
let myTable = document.getElementById("myTable");
submitButton.addEventListener("click",function(){

    // check if the value is empty
    if (firstName.value=='' | lastName.value=='' | fatherName.value=='' | fatherContact.value=='' | studentID.value=='' | className.value=='' | studentAddress.value==''){
        alert("Fill the missing fields!");
        return;
    }
    
    // create a tr class named data-rows
    let dataRow = document.createElement("tr");
    dataRow.classList.add("data-rows");

    function createTableData(value){
        // create a table data as td
        let singleData = document.createElement("td");
        singleData.innerHTML = value;
        dataRow.appendChild(singleData);
    }

    // append student ID
    createTableData(studentID.value);

    // append the first name
    createTableData(firstName.value)

    // append last name
    createTableData(lastName.value);

    // append father name
    createTableData(fatherName.value);

    // append father contact number
    createTableData(fatherContact.value);
    
    // append class name
    createTableData(className.value);

    // append the student address
    createTableData(studentAddress.value);
      
    // append the row
    myTable.appendChild(dataRow);

    firstName.value='';
    lastName.value='';
    fatherName.value='';
    fatherContact.value='';
    studentID.value='';
    className.value='';
    studentAddress.value='';
  

})
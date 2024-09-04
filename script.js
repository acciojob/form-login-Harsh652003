function getFormvalue(event) {
   

 
    const firstName = document.getElementsByName("fname")[0].value;
    const lastName = document.getElementsByName("lname")[0].value;

    
    const alertMessage = `${firstName} ${lastName}`;

    alert(alertMessage);
}


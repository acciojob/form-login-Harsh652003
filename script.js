function getFormvalue(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

 
    const firstName = document.getElementsByName("fname")[0].value;
    const lastName = document.getElementsByName("lname")[0].value;

    
    const alertMessage = `${firstName} ${lastName}`;

    alert(alertMessage);
}


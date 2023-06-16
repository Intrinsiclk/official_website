//form validation
function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var company = document.forms["myForm"]["company"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var inquiry = document.forms["myForm"]["inquiry"].value;
    var message = document.forms["myForm"]["message"].value;
  
    if (fname == "") {
      showAlertBox("Name is Required");
      return false;
    }
  
    if (email == "") {
      showAlertBox("Email is required");
      return false;
    }
  
    if (message == "") {
      showAlertBox("Message is required");
      return false;
    }

    if (company == "") {
      showAlertBox("company name is required");
      return false;
    }

    if (phone == "") {
      showAlertBox("phone is required");
      return false;
    }

    if (inquiry == "") {
      showAlertBox("inquiry is required");
      return false;
    }

  
    // If validation passes, call submitForm()
    submitForm();
    return true;
  }
  
  
  //sending details to email
  function submitForm() {
    let fname = document.getElementById("fname").value;
    let message = document.getElementById("message").value;
    let email = document.getElementById("email").value;
    let company = document.getElementById("company").value;
    let phone = document.getElementById("phone").value;
    let inquiry = document.getElementById("inquiry").value;
   
  
    //format in mail
    let ebody = ` 
                    <b>Name: </b>${fname} 
                    <br>
                    <b>Company Name: </b>${company}
                    <br>
                    <b>Phone No.: </b>${phone}
                    <br>
                    <b>Email: </b>${email}
                    <br>
                    <b>What is your inquiry about: </b>${inquiry}
                    <br>
                    <b>How can we help you: </b>${message} <br>
                   `;
  
    //Email code
     
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "akilakavindabogha@gmail.com",
      Password: "F84E25122D5E4CD54333F4CBC62A0BBD5E77",
      To: 'info.intrinsiclk@gmail.com',
      From: 'info.intrinsiclk@gmail.com',
      Subject: "Feedback From " + email,
      Body: ebody
    })
    showAlertBox("Thank you for your comment!");
  }
  
  //alert box hide/show function
  var alertBox = document.querySelector('.alert-box');
  var alertMessage = document.querySelector('#alert-message');
  
  function showAlertBox(message1) {
    alertMessage.textContent = message1;
    alertBox.style.display = 'block';
  }
  
  function hideAlertBox() {
    alertBox.style.display = 'none';
  }
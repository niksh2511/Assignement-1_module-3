$(document).ready(function () {
  $(":button").click(function (e) {
      e.preventDefault();

      function validate() {
          function validateEmpID() {
              let empID = $("#employeeID").val();
              let numbers = /[0-9]+/;

              if (empID === "") {
                  $("#EmpIDerror").text("Employee ID should not be blank");
              } else if (!empID.match(numbers)) {
                  $("#EmpIDerror").text("Please enter only numbers");
              } else if (empID.length < 5) {
                  $("#EmpIDerror").text("Employee ID should be at least 5 characters");
              } else {
                  $("#EmpIDerror").text("");
              }
          }

          function validateUserName() {
              let username = $("#employeeName").val();
              let char = /^[a-zA-Z, ' ']+$/;

              if (username === "") {
                  $("#UsernameErr").text("Name should not be blank");
              } else if (!username.match(char)) {
                  $("#UsernameErr").text("Please enter only characters");
              } else if (username.length < 6 || username.length > 20) {
                  $("#UsernameErr").text("Name should be between 6 and 20 characters long");
              } else {
                  $("#UsernameErr").text("");
              }
          }

          function dateValidate() {
              let inputDate = $("#age").val();
              let currentDate = new Date();
              let inputYear = new Date(inputDate).getFullYear();
              let minimumYear = currentDate.getFullYear() - 18;

              if (inputDate == "") {
                  $("#DateErr").text("Please enter date");
              } else if (inputYear > minimumYear) {
                  $("#DateErr").text("Age should be 18 or more");
              } else {
                  $("#DateErr").text("");
              }
          }

          // Designation validation
          let designation = $("#designation").val();
          let char = /^[a-zA-Z, ' ']+$/;

          if (designation === "") {
              $("#degErr").text("Designation cannot be blank");
          } else if (!designation.match(char)) {
              $("#degErr").text("Designation should be in characters");
          } else {
              $("#degErr").text("");
          }

          // Salary validation
          let salary = $("#salary").val();
          let num = /[0-9]+/;

          if (salary === "") {
              $("#salErr").text("Salary cannot be blank");
          } else if (!salary.match(num)) {
              $("#salErr").text("Salary should be in number");
          } else {
              $("#salErr").text("");
          }

          // drop down validation
          let cities = $("#location").val();
          if (!cities) {
              $("#optionErr").text("Please select city");
          } else {
              $("#optionErr").text("");
          }

          // email validation
          let email = $("#email").val();
          let test = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

          if (email === "") {
              $("#emailErr").text("Email cannot be blank");
          } else if (!email.match(test)) {
              $("#emailErr").text("Please enter a proper Email ID");
          } else {
              $("#emailErr").text("");
          }


          // Joinign date validation
          let joining = $("#joinDate").val();
          if (joining === "") {
              $("#joinDateErr").text("Please select joining date");
          } else {
              $("#joinDateErr").text("");
          }


          // Conatct number validation
          let phone = $("#contactNumber").val();
          let check = /^\d{10}$/;

          if (phone === "") {
              $("#contactErr").text("Please fill up contact details");
          } else if (!phone.match(check)) {
              $("#contactErr").text("Contact number should be number and 10 digits long");
          } else {
              $("#contactErr").text("");
          }

          // gender validation
          let selectedGender = $("input[name='gender']:checked").val();

          if (!selectedGender) {
              $("#GenderError").text("Please select gender");
          } else {
              $("#GenderError").text("");
          }


          validateUserName();
          validateEmpID();
          dateValidate();
      }


      validate();
  });
});

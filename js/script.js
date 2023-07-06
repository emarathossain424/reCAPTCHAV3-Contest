var SITE_KEY = '6LeJ7_YmAAAAAGB4ny-qKu6YXxFIDtpEqQ6zDWwo'

// Add your JavaScript code for reCAPTCHA v3 verification and form submission
function onSubmit(token) {
  document.getElementById("recaptchaResponse").value = token;
}
  
grecaptcha.ready(function() {
  //
  grecaptcha.execute(SITE_KEY, { action: 'submit' })
    .then(function(token) {
      onSubmit(token);
    });
});

/**
 * After clicking "Get Cash Offer!" button this function will be called
 */
function submitForm() {
  // Hide any previous messages
  $("#form-message-warning").addClass("d-none");
  $("#form-message-success").addClass("d-none");

  // Form data
  var formData = {
    'name': $('input[name=name]').val(),
    'property': $('input[name=property]').val(),
    'email': $('input[name=email]').val(),
    'phone': $('input[name=phone]').val(),
    'recaptcha_response': $('#recaptchaResponse').val()
  };

  // AJAX request
  $.ajax({
    type: "POST",
    dataType: 'json', 
    url: 'addlead.php', // Add your post URL here
    data: formData,
    success: function(data) {
      console.log(data.success)
      if(data.success){
        $("#form-message-success").removeClass('d-none');
        $("#form-message-success").html(data.message);
        console.log(data.message);
      }
      else{
        $("#form-message-warning").removeClass('d-none');
        $("#form-message-warning").html(data.message);
        console.log(data.message);
      }
    },
    error: function(error) {
      console(error)
      $("#form-message-warning").removeClass('d-none');
      $("#form-message-warning").html('Something went wrong');
      console.log("Error in form submission");
    }
  });
}
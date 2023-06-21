function saveUserDetails() {
    var name = document.querySelector('.name-group input').value;
  
    var day = document.querySelector('.birthday-group input:nth-child(1)').value;
    var month = document.querySelector('.birthday-group input:nth-child(2)').value;
    var year = document.querySelector('.birthday-group input:nth-child(3)').value;
  
    var email = document.querySelector('.email-group input[type="email"]').value;
  
    var noEmailCheckbox = document.querySelector('#no-email');
    var hasEmail = !noEmailCheckbox.checked;
  
    var userDetails = {
      name: name,
      birthday: {
        day: day,
        month: month,
        year: year
      },
      email: email,
      hasEmail: hasEmail
    };
  
    var existingUserDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
  
    Object.assign(existingUserDetails, userDetails);
  
    localStorage.setItem('userDetails', JSON.stringify(existingUserDetails));

    window.location.href = 'show.html';
  }
  
  var continueButton = document.querySelector('.continue');
  
  continueButton.addEventListener('click', saveUserDetails);
  
function savePhoneNumber() {
    var countryCode = document.querySelector('.phone select').value;
    var phoneNumber = document.querySelector('.phone-num input').value;
    var fullPhoneNumber = countryCode + phoneNumber;
  
    var userInfo = {
      phoneNumber: fullPhoneNumber
    };
  
    localStorage.setItem('phoneNumber', fullPhoneNumber);
  
    window.location.href = 'register.html';
  }

var checkPointsButton = document.querySelector('.check-points');

checkPointsButton.addEventListener('click', savePhoneNumber);



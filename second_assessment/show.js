var userDetails = JSON.parse(localStorage.getItem('userDetails'));
var phoneNumber = localStorage.getItem('phoneNumber');

var section = document.querySelector('section');

var nameElement = document.createElement('p');
nameElement.textContent = 'Name: ' + userDetails.name;

var birthdayElement = document.createElement('p');
birthdayElement.textContent = 'Birthday: ' + userDetails.birthday.day + '/' + userDetails.birthday.month + '/' + userDetails.birthday.year;

var emailElement = document.createElement('p');
emailElement.textContent = 'Email: ' + (userDetails.hasEmail ? userDetails.email : 'No email provided');

var phoneNumberElement = document.createElement('p');
phoneNumberElement.textContent = 'Phone Number: ' + phoneNumber;

section.appendChild(nameElement);
section.appendChild(birthdayElement);
section.appendChild(emailElement);
section.appendChild(phoneNumberElement);
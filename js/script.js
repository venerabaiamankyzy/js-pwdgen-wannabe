let username = prompt('Qual è il suo nome?');
username = username.replace(username[0], username[0].toUpperCase());

let surname = prompt('Qual è il suo cognome?'); 
surname = surname.replace(surname[0], surname[0].toUpperCase());

let usercolor = prompt('Qual è il suo colore preferito?');

let userdate = `Il suo nome è ${username}.<br />  Il suo cognome è ${surname}.<br />  Il suo colore preferito è ${usercolor}.`;

document.getElementById('main-title').innerHTML = userdate;

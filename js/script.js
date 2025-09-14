function sayHello() {
  alert("שלום! לחצת על הכפתור 😄");
}

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  if (name && message) {
    alert(`תודה ${name}, ההודעה שלך נשלחה!`);
  } else {
    alert("אנא מלא את כל השדות");
  }
}

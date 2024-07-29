// your code here
let newUrl = `https://localhost:8080/?name=${name}&year=${year}`;
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
	document.getElementById('url').innerText = newUrl;

  // Rest of the code goes here
});
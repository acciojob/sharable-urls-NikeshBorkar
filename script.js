// your code here
document.getElementById('button').addEventListener('click', function() {
            // Get the values from the input fields
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            // Construct the URL with query parameters
            const baseURL = 'https://localhost:8080/';
            const queryParams = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
	        const queryParams1 = `?name=${encodeURIComponent(name)}`;
	        const queryParams2 = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
            const fullURL = baseURL + queryParams;

            // Update the h3 element with the new URL
            document.getElementById('url').textContent = fullURL;
        });
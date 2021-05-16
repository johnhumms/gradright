async function displayDistrict(event) {
    event.preventDefault();

    const id = document.querySelector('#district').value;

    if (id) {
        // Send a POST request to the API endpoint
        const response = await fetch('/district/'+id, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/district/'+id);
        } else {
          alert(response.statusText);
        }
      }
}

 document.querySelector('#district').addEventListener('change', displayDistrict);
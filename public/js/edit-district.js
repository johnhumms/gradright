
async function editDistrict(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const district_name = document.querySelector('#district-name').value;
    const math_credit_to_graduate = parseInt(document.querySelector('#math').value);

      const response = await fetch(`/api/district/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            district_name,
            math_credit_to_graduate,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace(`/api/district/${id}`);
      } else {
        alert(response.statusText);
      }
  }


document.querySelector('#edit-btn').addEventListener('click', editDistrict);
async function addDistrict(event) {
    event.preventDefault();

    const district_name = document.querySelector('#district-name').value;
    const math_credit_to_graduate = dparseInt(ocument.querySelector('#math').value);

    const response = await fetch(`/api/district`, {
      method: 'POST',
      body: JSON.stringify({
        district_name,
        math_credit_to_graduate,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/district');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#add-btn').addEventListener('click', addDistrict);

async function editDistrict(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const district_name = document.querySelector('#district-name').value;
    const math_credit_to_graduate = document.querySelector('#math').value;
    const english_credit_to_graduate = document.querySelector('#english').value;
    const science_credit_to_graduate = document.querySelector('#science').value;
    const social_studies_credit_to_graduate = document.querySelector('#ss').value;
    const pe_credit_to_graduate = document.querySelector('#pe').value;
    const health_credit_to_graduate = document.querySelector('#health').value;
    const elective_credit_to_graduate = document.querySelector('#elective').value;

      const response = await fetch(`/api/district/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            district_name,
            math_credit_to_graduate,
            english_credit_to_graduate,
            science_credit_to_graduate,
            social_studies_credit_to_graduate,
            pe_credit_to_graduate,
            health_credit_to_graduate,
            elective_credit_to_graduate,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace(`/district/${id}`);
      } else {
        alert(response.statusText);
      }
  }


document.querySelector('#edit-btn').addEventListener('click', editDistrict);
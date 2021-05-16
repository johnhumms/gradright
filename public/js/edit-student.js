
async function editStudent(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const student_name = document.querySelector('#stu-name').value;
    const student_id = document.querySelector('#stu-id').value;
    const school_name = document.querySelector('#school').value;    
    const current_year = document.querySelector('#year').value;
    const current_math_credits = document.querySelector('#math').value;
    // const picture = document.querySelector('#profile').value;
    const district_id = document.querySelector('#district').value;

      const response = await fetch(`/api/student/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            student_name,
            student_id,
            school_name,
            current_year,
            current_math_credits,
            // picture,
            district_id,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace(`/student/${id}`);
      } else {
        alert(response.statusText);
      }
  }


document.querySelector('#edit-btn').addEventListener('click', editStudent);
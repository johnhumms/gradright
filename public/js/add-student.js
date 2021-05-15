async function addStudent(event) {
    event.preventDefault();

    const student_name = document.querySelector('#stu-name').value;
    const student_id = parseInt(document.querySelector('#stu-id').value);
    const school_name = document.querySelector('#school').value;    
    const current_year = parseInt(document.querySelector('#year').value);
    const current_math_credits = parseInt(document.querySelector('#math').value);
    // const picture = document.querySelector('#profile').value;
    const district_id = parseInt(document.querySelector('#district').value);


    const response = await fetch(`/api/student`, {
      method: 'POST',
      body: JSON.stringify({
        student_name,
        student_id,
        school_name,
        current_year,
        current_math_credits,
        picture,
        district_id,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/student');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.student-form').addEventListener('submit', addStudent);
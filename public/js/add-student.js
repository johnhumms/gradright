async function addStudent(event) {
    event.preventDefault();

    const student_name = document.querySelector('#stu-name').value;
    const student_id = document.querySelector('#stu-id').value;
    const school_name = document.querySelector('#school').value;    
    const current_year = document.querySelector('#year').value;
    const current_math_credits = document.querySelector('#math').value;
    const has_math_credits = document.querySelector('#math-cred').value;
    const district_id = document.querySelector('#district').value;

    const response = await fetch(`/api/student`, {
      method: 'POST',
      body: JSON.stringify({
        student_name,
        student_id,
        school_name,
        current_year,
        current_math_credits,
        has_math_credits,
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
async function addStudent(event) {
    event.preventDefault();

    const student_name = document.querySelector('#stu-name').value;
    const student_id = document.querySelector('#stu-id').value;
    const school_name = document.querySelector('#school').value;    
    const current_year = document.querySelector('#year').value;
    const current_math_credits = document.querySelector('#math').value;
    const current_english_credits = document.querySelector('#eng').value;
    const current_science_credits = document.querySelector('#sci').value;
    const current_social_studies_credits = document.querySelector('#ss').value;
    const current_pe_credits = document.querySelector('#pe').value;
    const current_health_credits = document.querySelector('#health').value;
    const current_elective_credits = document.querySelector('#elective').value;
    // const picture = document.querySelector('#profile').value;
    const picture = 'profile.png';
    const district_id = document.querySelector('#district').value;


    const response = await fetch(`/api/student`, {
      method: 'POST',
      body: JSON.stringify({
        student_name,
        student_id,
        school_name,
        current_year,
        current_math_credits,
        current_english_credits,
        current_science_credits,
        current_social_studies_credits,
        current_pe_credits,
        current_health_credits,
        current_elective_credits,
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
async function addStudent(event) {
    event.preventDefault();
  console.log("add student")
    const name = document.querySelector('#stu-name').value;
    const stu_id = document.querySelector('#stu-id').value;
    const school = document.querySelector('#school').value;
    const year = document.querySelector('#year').value;
    const math = document.querySelector('#math').value;
    const has_math = document.querySelector('#math-cred').value;
    const district = document.querySelector('#district').value;
  
    const response = await fetch(`/api/student`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        stu_id,
        school,
        year,
        math,
        has_math,
        district,
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
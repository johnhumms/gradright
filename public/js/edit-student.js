
async function editStudent(event) {
    event.preventDefault();
console.log("edit")

    const name = document.querySelector('#stu-name').value;
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

      const response = await fetch(`/api/student/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
  }


document.querySelector('#stu-data').addEventListener('submit', editStudent);
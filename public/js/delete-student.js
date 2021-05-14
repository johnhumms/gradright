
async function deleteStudent(event) {
   
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (window.confirm("Are you sure you want to delete this student?")) {
        const response = await fetch(`/api/student/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert("Deleted student.");
            document.location.replace('/student');
        } else {
            alert(response.statusText);
        }
    }
    else {
        document.location.reload();
    }

};

document
    .querySelector('#delete-stu')
    .addEventListener('click', deleteStudent);




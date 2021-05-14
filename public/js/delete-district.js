async function deleteDistrict(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (window.confirm("Are you sure you want to delete this district?")) {
        const response = await fetch(`/api/district/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert("Deleted district.")
            document.location.replace('/district');
        } else {
            alert(response.statusText);
        }
    }
    else {
        document.location.reload();
    }
};


document
    .querySelector('#delete-district')
    .addEventListener('click', deleteDistrict);

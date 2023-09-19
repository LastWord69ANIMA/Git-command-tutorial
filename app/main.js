document.getElementById('showFormButton').addEventListener('click', () => {
    toggleFormVisibility('inputForm');
});

document.getElementById('deleteButton').addEventListener('click', () => {
    toggleFormVisibility('deleteForm');
});

document.getElementById('editButton').addEventListener('click', () => {
    toggleFormVisibility('editForm');
});

function toggleFormVisibility(formId) {
    const form = document.getElementById(formId);
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

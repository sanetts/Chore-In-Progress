document.addEventListener('DOMContentLoaded', function() {
    const addChoreButton = document.getElementById('add_chore_button');
    const addChoreModal = document.getElementById('addChoreModal');

    addChoreButton.addEventListener('click', function() {
        addChoreModal.style.display = 'block';
    });

    window.onclick = function(event) {
        if (event.target === addChoreModal) {
            addChoreModal.style.display = 'none';
        }
    };
});

function closeModal() {
    const addChoreModal = document.getElementById('addChoreModal');
    addChoreModal.style.display = 'none';
}

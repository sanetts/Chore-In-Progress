console.log("addchorescript.js loaded successfully");
document.addEventListener('DOMContentLoaded', function () {

  const addChoreButton = document.getElementById('add_chore_button');
  console.log(addChoreButton)
  const addChoreModal = document.getElementById('addChoreModal');

  addChoreButton.addEventListener('click', function () {
      addChoreModal.style.display = 'block';
  });

  window.onclick = function (event) {
      if (event.target === addChoreModal) {
          addChoreModal.style.display = 'none';
      }
  };


  function updateChoreStatus(newStatus, choreId) {
      console.log(`Chore with ID ${choreId} marked as ${newStatus}`);
      updateUI(choreId, newStatus);
  }

  function updateUI(choreId, newStatus) {
      const ongoingChoreRow = document.getElementById(`ongoing-chore-${choreId}`);

      if (ongoingChoreRow) {
          const completedChoresTable = document.querySelector('#completed-chores-table tbody');
          const clonedRow = ongoingChoreRow.cloneNode(true);
          completedChoresTable.appendChild(clonedRow);
          ongoingChoreRow.remove();
      }
  }

  function attachEventListeners() {
      const markCompletedButtons = document.querySelectorAll('.mark-completed-button');

      markCompletedButtons.forEach(button => {
          button.addEventListener('click', function () {
              const choreId = button.getAttribute('data-chore-id');
              updateChoreStatus('completed', choreId);
          });
      });
  }

  attachEventListeners();
});

function closeModal() {
  const addChoreModal = document.getElementById('addChoreModal');
  addChoreModal.style.display = 'none';
}

console.log("Scripts loaded successfully");

document.addEventListener('DOMContentLoaded', function () {
  const addChoreButton = document.getElementById('add_chore_button');
  const addChoreModal = document.getElementById('addChoreModal');

  addChoreButton.addEventListener('click', function () {
      addChoreModal.style.display = 'block';
  });

  window.onclick = function (event) {
      if (event.target === addChoreModal) {
          addChoreModal.style.display = 'none';
      }
  };

  const choreAssignmentForm = document.getElementById('chore_assignment_form');

  choreAssignmentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      assignChore();
  });

  function assignChore() {
 
    //const assignPerson = document.getElementById('assign_person').value;
    const choreName = document.getElementById('chore_name').value;
    const assignedBy = document.getElementById('assigned_by').value;
    const dueDate = document.getElementById('due_date').value;


    const ongoingTasksTable = document.querySelector('#ongoing-tasks-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${choreName}</td>
    <td>${assignedBy}</td>
    <td>${getCurrentDate()}</td>
    <td>${dueDate}</td>
    <td>Pending</td>
    <td><button class="mark-completed-button" data-chore-id="${generateChoreId()}">Mark as Completed</button></td>
`;
 
    ongoingTasksTable.appendChild(newRow);

   
    closeModal();
}


  function getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
  }

  function generateChoreId() {
      return 'choreId' + Math.random().toString(36).substr(2, 9);
  }

  function closeModal() {
      addChoreModal.style.display = 'none';
  }
});

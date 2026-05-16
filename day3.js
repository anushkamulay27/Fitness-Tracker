const form = document.getElementById('workoutform');
const list = document.getElementById('workoutlists');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const exerciseName = document.getElementById('name').value;
    const duration = document.getElementById('time').value;
    const date = document.getElementById('date').value;
    const notes = document.getElementById('notes').value;
    const li = document.createElement('li');
li.textContent = exerciseName + " | " + duration + " mins | " + date + " | " + notes;
list.appendChild(li); 
    console.log();
});




function onReady() {
  let id = 0;
  var toDos = [];
  var filtered = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
     newToDoText.value = '';
     id += 1;
     renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });



 function renderTheUI() {
   const toDoList = document.getElementById('toDoList');

   toDoList.textContent = '';


   toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    var button = document.createElement('button');
    button.innerHTML = 'Delete';
    checkbox.type = "checkbox";

     newLi.textContent = toDo.title;

     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
     newLi.appendChild(button);

     button.addEventListener('click', event => {
      event.preventDefault();
      toDos = toDos.filter(function(td){
        return toDo.id != td.id;
      });
      renderTheUI();
    });
   });
   }

}


window.onload = function() {
 onReady();
};

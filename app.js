/*function onReady() {
  const addToDoForm = document.getElementById('addToDoForm')
  const delButton = document.getElementById('delete');

  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
   let title = newToDoText.value;

    // create a new li
   let newLi = document.createElement('li');

   // create a new input
   let checkbox = document.createElement('input');

   // set the input's type to checkbox
   checkbox.type = "checkbox";

   // set the title
   newLi.textContent = title;

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   // attach the li to the ul
   toDoList.appendChild(newLi);

   //empty the input
   newToDoText.value = '';

 });


delButton.addEventListener('click', () => {

   // because this is in the form, the other handler will get triggered too so we want to override it
   event.preventDefault();

   //iterate through childnodes (index 0 is the parent)
   for (var i = 1; i < toDoList.childNodes.length; i++){

      // check if the checkbox is checked in the childnode
      if(toDoList.childNodes[i].getElementsByTagName("input")[0].checked) {
         toDoList.removeChild(toDoList.childNodes[i]);
      }
   }
 });

}

*/








function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
     newToDoText.value = '';

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
    checkbox.type = "checkbox";

     newLi.textContent = toDo.title;

     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
   });
   }

}


window.onload = function() {
 onReady();
};

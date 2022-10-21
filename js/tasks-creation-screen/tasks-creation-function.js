//creating the matter creation screen here
function taskCreationScreen() {
    $('#search-bar,#sub-tabs').hide();
    $('#doc-title-container').hide();
    $('#card-container').empty();
    // $('#top-layer').prepend(matterCreationTopLayer);// create matter top layer
    $('#card-container').append(matterSubmissionForm);//create matter submission form
    $('#matter-submission-form').append(categorySection, tasksCreationButtonSection); // create container layer items
    // formValidation();
    buildCategoryModal(); //creating the category modal fresh
    // $('.sidepanel').append(requiredFieldsToast); //create warning modal for required fields toast 
}

// function formValidation(){
//         'use strict'
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.querySelectorAll('.needs-validation')
      
//         // Loop over them and prevent submission
//         Array.prototype.slice.call(forms)
//           .forEach(function (form) {
//             form.addEventListener('submit', function (event) {
//               if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//               }
      
//               form.classList.add('was-validated')
//             }, false)
//           })
// }

//canceling and closing the tasks creation screen
function cancelTasksCreation() {
  $('#doc-title-container').show(); //show title container
  createMattersDetails(tempName); // calling create matter details function, to create the default view
  createTasksList(); // calling create Matters function, to create the default view
  $('.category-triggers').off('click'); //removing event listener for category modal
  $('.category-collapsible').off('click');  //remove event listener for rotate category collapsible
}

//saving the task which was newly created
function saveTasksCreation() {
    // let tempName = $('#matter-name').val();
    // if (tempName) {
        let tempTasksObj = {
            id: 'task'+"_"+Math.floor(Math.random()*200),
            get name(){return this.id},
            icon: 'fa-clipboard-list',
            docs: false,
            status: {
              priority:'High',
              progress:'Not Started',
          }
        }
        tasksListArray.unshift(tempTasksObj); //adding the new task object to the start of the array
        $('#doc-title-container').show(); //show title container
        createMattersDetails(tempName); // calling create matter details function, to create the default view
        createTasksList(); //create tasks page
        $('#creation-toast-text').text('Task'); //changing toast text to task
        toggleToast('#creation-toast');//show the matter was successfully created
        $('.category-triggers').off('click'); //removing event listener for category modal
        $('.category-collapsible').off('click');  //remove event listener for rotate category collapsible
    // }
    // else{
    //   toggleToast('#required-fields-toast');//show the please enter the required fields toast warning
    // }
}

// MatterCreationScreen();
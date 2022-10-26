//creating the task creation screen here
function taskCreationScreen() {
  $('#search-bar,#sub-tabs').hide();
  $('#doc-title-container').hide();
  $('#card-container').empty();
  // $('#top-layer').prepend(matterCreationTopLayer);// create matter top layer
  $('#card-container').append(taskSubmissionForm);//create matter submission form
  $('#tasks-submission-form').append(createTasksTitleContainer(), categorySection, tasksCreationButtonSection); // create container layer items
  // formValidation();
  buildCategoryModal(false); //creating the category modal fresh
  $(`#doc-title-container`).hide(); //hide doc title container
  taskItems[2].value = tempMatterName;
  let temptaskscontainer = createParentCategoryContainer(tasksInformation); //creating tasks form
  $('#tasks-submission-form').append(temptaskscontainer); // appending the tasks form
  formValidation(); // adding form validation in place to prevent submission
}

//canceling and closing the tasks creation screen
function cancelTasksCreation() {
  $('#doc-title-container').show(); //show title container
  createMattersDetails(tempMatterName); // calling create matter details function, to create the default view
  createTasksList(); // calling create Matters function, to create the default view
  $('.category-triggers').off('click'); //removing event listener for category modal
  $('.category-collapsible').off('click');  //remove event listener for rotate category collapsible
  $(`#doc-title-container`).show(); //show doc title container
  $('#tasks-submission-form').remove(); //remove tasks submission form
}

//saving the task which was newly created
function saveTasksCreation() {
  

  // function checkProperties(obj){
  //   for(const [key, value] of Object.entries(obj)){
  //     if(value !== null && value !== ""){
  //       return false; // break the loop even if one value is empty
  //     }
  //   }
  //   return true; // if loop is executed without any hiccups
  // }
  let tempSubject = $('#tasks-subject').val();

  if (tempSubject) {
    let tempTasksObj = {
      id: 'task' + "_" + Math.floor(Math.random() * 200),
      name: $('#tasks-subject').val(),
      icon: 'fa-clipboard-list',
      docs: false,
      status: {
        priority: $('#tasks-priority').val(),
        progress: $('#tasks-status').val(),
      },
      dates: {
        startDate: $('#tasks-start-date').val(),
        endDate: $('#tasks-end-date').val(),
      }
    }
    tasksListArray.unshift(tempTasksObj); //adding the new task object to the start of the array
    $('#doc-title-container').show(); //show title container
    createMattersDetails(tempMatterName); // calling create matter details function, to create the default view
    createTasksList(); //create tasks page
    $('#creation-toast-text').text('Task'); //changing toast text to task
    toggleToast('#creation-toast');//show the matter was successfully created
    $('.category-triggers').off('click'); //removing event listener for category modal
    $('.category-collapsible').off('click');  //remove event listener for rotate category collapsible
    $(`#doc-title-container`).show(); //show doc title container
    $('#tasks-submission-form').remove(); //remove tasks submission form
  }
  else {
    console.log('fire');
    toggleToast('#required-fields-toast');//show the please enter the required fields toast warning
  }
}

// MatterCreationScreen();
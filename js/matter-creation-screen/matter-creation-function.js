//creating the matter creation screen here
function MatterCreationScreen() {
    $('#top-layer').empty();
    $('#card-container').empty(); //clear card container
    $(`#doc-title-container`).hide(); //hide doc title container
    $('#top-layer').prepend(matterCreationTopLayer);// create matter top layer
    $('#card-container').append(matterSubmissionForm);//create matter submission form
    $('#matter-submission-form').append(categorySection, categoryGeneralInfoSection, categoryButtonSection); // create container layer items
    formValidation();
    buildCategoryModal(true); //creating the category modal fresh
    buildAssigneesModal(); // creating assignees list
}

function formValidation(){
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
}

//canceling and closing the matter creation screen
function cancelMatterCreation() {
    createDefaultTopLayer(); //creating default top layer
    createMatters(); // calling create Matters function, to create the default view
    $('.category-triggers').off('click'); //removing event listener for category modal
    $('.category-collapsible').off('click');  //remove event listener for rotate category collapsible
    $(`#doc-title-container`).show(); //show doc title container
}

//saving the matter which was newly created
function saveMatterCreation() {
    let tempName = $('#matter-name').val();
    if (tempName) {
        let tempMatterObj = {
            id: tempName+"_"+Math.floor(Math.random()*200),
            name: tempName,
            icon: 'fa-briefcase',
            docs: true,
            func:`createMattersDetails('${tempName}')`
        }
        matters.unshift(tempMatterObj); //adding the new matter object to the start of the array
        createDefaultTopLayer(); //creating default top layer
        createMatters(); // calling create Matters function, to create the default view
        $('#creation-toast-text').text('Matter'); //changing toast text to matter
        toggleToast('#creation-toast');//show the matter was successfully created
        $('.category-triggers').off('click'); //removing event listener for category modal
        $('.category-collapsible').off('click');  //remove event listener for rotate category collapsible
        $(`#doc-title-container`).show(); //show doc title container
    }
    else{
      toggleToast('#required-fields-toast');//show the please enter the required fields toast warning
    }
}

// MatterCreationScreen();
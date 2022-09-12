//creating the matter creation screen here
function MatterCreationScreen() {
    $('#top-layer').empty();
    $('#card-container').empty();
    $('#top-layer').prepend(matterCreationTopLayer);// create matter top layer
    $('#card-container').append(matterSubmissionForm);//create matter submission form
    $('#matter-submission-form').append(categorySection, categoryGeneralInfoSection, categoryButtonSection); // create container layer items
    formValidation();
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
            func:`createMattersDetails(${tempName})`
        }
        matters.unshift(tempMatterObj); //adding the new matter object to the start of the array
        createDefaultTopLayer(); //creating default top layer
        createMatters(); // calling create Matters function, to create the default view
    }
    else{
        
    }
}

// MatterCreationScreen();
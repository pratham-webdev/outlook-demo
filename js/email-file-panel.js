let selectedDocsArr = [];

let emailDocStatus = false;

let emailDocNumber = 0;

let emailDocs = emailList[0].docs;

// const emailDocs = [
//     {
//         id: 1,
//         name: 'meeting notes.txt',
//         icon: 'fa-file-lines',
//         docs: false,
//         func: 'javaScript:void(0);'
//     },
//     {
//         id: 2,
//         name: 'recap.docx',
//         icon: 'fa-file-word',
//         docs: false,
//         func: 'javaScript:void(0);'
//     },
//     {
//         id: 3,
//         name: 'deck.ppt',
//         icon: 'fa-file-powerpoint',
//         docs: false,
//         func: 'javaScript:void(0);'
//     },
//     {
//         id: 4,
//         name: 'invoices.xlsx',
//         icon: 'fa-file-excel',
//         docs: false,
//         func: 'javaScript:void(0);'
//     }
// ]



const emailItem = {
    name: 'Colin vs.Tanner.eml',
    icon: 'fa-envelope',
    docs: false,
    func: 'javaScript:void(0)'
}



const outerEmailFilePanel = `<div id="email-file-panel" class="mx-auto mb-0" tabindex="0">
<div class="px-3 py-2 border-bottom d-flex align-items-center justify-content-between">
    <h6 class="m-0">Upload Files from Selected Email</h6>
    <button class="btn btn-sm btn-new" onclick="moreFunctions.uploadEmailDocs.call()"><i class="fs-5 fa-solid fa-chevron-down"></i></button>
</div>
<div id="docs-panel" class="px-3 pt-3 collapse show">
      <div class="p-2 d-flex">
          <div class="icon"><i class="fs-3 fa-solid fa-envelope accent-color"></i></div>
          <div class="card-details ps-3">
              <div id="email-file-panel-subject" class="card-name" title="${emailList[0].subject}">${emailList[0].subject}</div>
              <div class="text-muted">
                  <span>Sent by John Smith on 3/22/21 1:02 PM </span>
              </div>
          </div>
      </div>
      <button id="email-uploader" class="btn btn-sm btn-new" type="button" onclick="emailItemUpload()
      "><i class="fs-5 fa-solid fa-upload me-3"></i>Upload Email to Matter</button>
      <div class="my-2">
      <div class="h6 mb-0 pb-2 border-bottom">Documents in the email (${emailDocs.length})</div>
      <div id="email-selected-docs" class="pt-3">
      
      </div>
      <button class="btn btn-sm btn-outline-primary mt-2" type="button" onclick="getSelectedDocs()">Upload Selected Items</button>
      </div>
  </div>
</div>`

function createEmailDocs() {
    $('#email-selected-docs').empty();
    let tempEmailDocsArr = emailDocs.map(createEmailDocsItems).join('');
    $('#email-selected-docs').append(tempEmailDocsArr);
}

function createEmailDocsItems(item) {
    return `<div class="fw-normal pb-2 small rounded" title="${item.name}"><input class="form-check-input me-3" type="checkbox" value="${item.id}"><i class="fa-solid ${item.icon} accent-color me-2"></i><span class="truncate">${item.name}</span></div>`
}

$('#email-file-modal').append(outerEmailFilePanel);

function getSelectedDocs() {
    selectedDocsArr = [];
    $('#email-selected-docs input:checked').each(function () {
        //adding front-end check for files uploaded
        if(!$(this).parents('.fw-normal').hasClass(`uploaded`)){
            $(this).parents('.fw-normal').addClass(`upload-checked not-uploaded`);
        }
        emailDocs.forEach((item) => {
            item.id == $(this)[0].value ? selectedDocsArr.push(item) : '';
        })
    });

    //triggering upload liteboxes
    editEmailDocUpload();
}

//litebox function
function editEmailDocUpload(skip) {
    if (emailDocNumber < selectedDocsArr.length && emailDocStatus == false) {
        //open litebox
        toggleLitebox('#email-upload-file-panel');
        //selecting name from array to put in litebox
        $('#emailDocName').val(selectedDocsArr[emailDocNumber].name);
        emailDocStatus = true;
        //
        emailDocNumber++;
    }
    else if (emailDocStatus == true && emailDocNumber < selectedDocsArr.length) {   //setting name in the array from the input
        selectedDocsArr[emailDocNumber - 1].name = $('#emailDocName').val();
        //selecting name from array to put in litebox
        $('#emailDocName').val(selectedDocsArr[emailDocNumber].name);
        //incrementing doc number for next doc in array
        emailDocNumber++;
    }
    else {
        if(skip == false){
            selectedDocsArr[emailDocNumber - 1].name = $('#emailDocName').val();
        }
        //uploading files, basically rendering items in the card-container
        $('#card-container').append(selectedDocsArr.map(cardTemplate).join(''));
        //replacing checkboxes for front-end , first checking for other uploaded items

        // $('.upload-checked .form-check-input').remove();
        $('.upload-checked.not-uploaded').append(`<i class="fa-solid fa-circle-check text-success ms-2 uploaded"></i>`);
        $('.upload-checked.not-uploaded').addClass('uploaded');
        $('.not-uploaded').removeClass('not-uploaded');

        //closing litebox
        toggleLitebox('#email-upload-file-panel');
        //setting email docs to upload as zero
        emailDocNumber = 0;
        //setting upload status as false
        emailDocStatus = false;
        skip == false
    }
}

//email upload
function emailItemUpload() {
    $('#card-container').append(cardTemplate(emailItem));
    $('#email-uploader').append(`<i class="fa-solid fa-circle-check text-success ms-2 uploaded"></i>`);
}

createEmailDocs();



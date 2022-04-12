const bodyFiles = [
    {
        id:'bf-1',
        name:'meeting notes.txt',
        icon:'fa-file-lines',
        docs:false,
        func:'javaScript:void(0);'
    },
    {
        id:'bf-2',
        name:'recap.docx',
        icon:'fa-file-word',
        docs:false,
        func:'javaScript:void(0);'
    },
    {
        id:'bf-3',
        name:'deck.ppt',
        icon:'fa-file-powerpoint',
        docs:false,
        func:'javaScript:void(0);'
    },
]

function bodyFilesTemplate(el){
    return  `<div class="card m-2">
      <div class="p-2 d-flex">
          <div class="icon"><i class="fs-3 fa-solid ${el.icon} accent-color opacity-75"></i></div>
          <div class="card-details ps-3">
              <div class="card-name" draggable="true" ondragstart="drag(event)" value="${el.icon}" onclick="${el.func};">${el.name}</div>
              <div class="text-muted">
                  <span>Modified by John Smith</span><span class="ms-2">•</span><span
                      class="ms-2">3/22/21 1:02 PM </span>
              </div>
             ${el.docs == true ? createIndiFiles() : ''} 
          </div>
      </div>
  </div>`
  }
  
  function createIndiFiles(){
      return `<div class="text-muted">
      <a class="btn btn-sm btn-new p-0" href="#">Documents</a><span class="ms-2">•</span><a
          class="ms-2 btn btn-sm btn-new p-0" href="#">Appointments</a>
  </div>`
  }

let bodyFilesArr = bodyFiles.map(el => bodyFilesTemplate(el)).join("");


function createBodyFiles(name){
    $('#body-files').append(bodyFilesArr);
}

createBodyFiles();
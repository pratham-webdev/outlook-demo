function cardTemplate(el){
  return  `<div class="card mb-2">
    <div class="p-2 d-flex">
        <div class="icon"><i class="fs-3 fa-solid ${el.icon} accent-color opacity-75"></i></div>
        <div class="card-details ps-3">
            <div class="card-name" onClick="docMove = true; ${el.func}; ">${el.name}</div>
            <div class="text-muted">
                <span>Modified by John Smith</span><span class="ms-2">•</span><span
                    class="ms-2">3/22/21 1:02 PM </span>
            </div>
           ${el.docs == true ?createDocs() : ''} 
        </div>
    </div>
</div>`
}

function createDocs(){
    return `<div class="text-muted">
    <a class="btn btn-sm btn-new p-0" href="#">Documents</a><span class="ms-2">•</span><a
        class="ms-2 btn btn-sm btn-new p-0" href="#">Appointments</a>
</div>`
}
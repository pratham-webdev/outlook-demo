let copyItemsArray = [];

const moreFunctions = {
    cut: function () {
        copyItemsArray.push($(this).parents('.card')[0].outerHTML); //single cut is not really necessary
        // $(this).parents('.card')[0].remove();
        // console.log($(this).parents('.card'))
        $(this).parents('.card').addClass('cut-item');

    },
    copy: function () {
        copyItemsArray.push($(this).parents('.card')[0].outerHTML); //single copy is not really necessary
    },
    paste: function () {
        $('#card-container').append(copyItemsArray.join(""));
        copyItemsArray = [];
        $('.dropdown-menu,.more-options').removeClass("show");
        $('.card-selected').removeClass('card-selected');
        $('#card-container .form-check-input').hide();

    },
    multiCut: function () {
        $('#card-container .card-selected').each(function () {
            copyItemsArray.push($(this)[0].outerHTML)
        });
        $('#card-container .card-selected').addClass('cut-item');
        $('#card-container .card-selected').removeClass('card-selected');
        $('#card-container .form-check-input').hide();
    },
    multiCopy: function () {
        $('#card-container .card-selected').each(function () {
            copyItemsArray.push($(this)[0].outerHTML)
        });
    },
    selectMode: function () {
        $('#card-container .form-check-input').toggle();
        $('#card-container .form-check-input').prop('checked', false);
        $('#card-container .card-selected').removeClass('card-selected');
    },
    uploadEmailDocs: function (location) {
        $(`${location}`).collapse('toggle');
        let tempID = $(`${location}`).parent().attr('id');
        $(`#${tempID} .fa-chevron-down`).toggleClass('rotate');
    }
}

const moreOptions = [
    {
        id: 1,
        name: 'Upload Files Here',
        icon: 'fa-file-arrow-up',
        func: `javascript:void(0)`
    },
    {
        id: 2,
        name: 'Create New Sub Folder',
        icon: 'fa-folder-plus',
        func: `toggleLitebox('#new-folder-panel')`
    },
    {
        id: 3,
        name: 'Cut',
        icon: 'fa-scissors',
        func: `moreFunctions.cut.call(this)`
    },
    {
        id: 4,
        name: 'Copy',
        icon: 'fa-copy',
        func: `moreFunctions.copy.call(this)`
    },
    {
        id: 5,
        name: 'Paste',
        icon: 'fa-clipboard',
        func: `moreFunctions.paste()`
    },
    {
        id: 6,
        name: 'Toggle Select Mode',
        icon: 'fa-square-check',
        func: `moreFunctions.selectMode()`
    },
]


const moreOptionsTemplate = `
<ul class="dropdown-menu" aria-labelledby="dropdown-more-options">
${moreOptions.map(createMoreOptions).join("")}
</ul>`

function createMoreOptions(el) {
    return `<li class="w-100">
    <button type="button" onclick="${el.func}"
        class="btn btn-sm btn-new d-inline-flex align-items-center p-2 mx-2">
        <i class="fa-solid ${el.icon} me-2"></i>${el.name}
    </button>
</li>`
}


function cardTemplate(el) {
    return `<div class="card mb-2 border-0 rounded-0" tabindex="0">
    ${el.status ? createCardStatus(el.status) : '' /* status tags */}
    <div class="p-2 d-flex justify-content-around">
        <div class="icon d-flex"><input class="form-check-input me-3" type="checkbox" value=""><i class="fs-3 fa-solid ${el.icon} accent-color opacity-75"></i></div>
        <div class="card-details ps-3">
            <div class="card-name truncate alt-click" onClick="docMove = true; ${el.func};" title="${el.name}" tabindex="0">${el.name}</div>
            <div class="text-muted">
                <span>Modified by John Smith</span><span class="ms-2">•</span><span
                    class="ms-2">3/22/21 1:02 PM </span>
            </div>
           ${el.docs == true ? createDocs() : '' /* doc labels */} 
        </div>
   <div>
   <button type="button" class="btn btn-sm btn-new mb-auto more-options" data-bs-toggle="dropdown" aria-expanded="false"><i class="fs-5 fa-solid fa-ellipsis-vertical accent-color"></i></button>
    ${el.status ? '' : moreOptionsTemplate}
   </div>
    </div>
</div>`
}

function createDocs() {
    return `<div class="text-muted">
    <a class="btn btn-sm btn-new p-0" href="#">Documents</a>
    <span class="ms-2">•</span>
    <a class="ms-2 btn btn-sm btn-new p-0" href="#">Appointments</a>
    <span class="ms-2">•</span>
    <a class="ms-2 btn btn-sm btn-new p-0" href="#">Tasks</a>
</div>`
}

function createCardStatusItems(el){
    let tempDiv = ''
    for(const [key, value] of Object.entries(el)) {
        tempDiv = tempDiv+`<div class="card rounded-pill text-center accent-color mt-2 me-1 pointer task-status">${value}</div>`
    }
    return tempDiv;
}

function createCardStatus(el){
     return `
     <div class="px-2 pt-2 pb-0 d-flex flex-wrap">
        ${createCardStatusItems(el)}
     </div> `
}





let copyItemsArray = [];

const moreFunctions = {
    cut: function () {
        copyItemsArray.push($(this).parents('.card')[0].outerHTML);
        // $(this).parents('.card')[0].remove();
        // console.log($(this).parents('.card'))
        $(this).parents('.card').addClass('cut-item');

    },
    copy: function () {
        copyItemsArray.push($(this).parents('.card')[0].outerHTML);
    },
    paste: function () {
        $('#card-container').append(copyItemsArray.join(""));
        copyItemsArray = []; 
        $('.dropdown-menu,.more-options').removeClass("show");
        $('.card-selected').removeClass('card-selected');

    },
    multiCut: function(){
       $('.card-selected').each(function(){
           copyItemsArray.push($(this)[0].outerHTML)
       });
        $('.card-selected').addClass('cut-item');
        $('.card-selected').removeClass('card-selected');
   },
    multiCopy: function(){
        $('.card-selected').each(function(){
            copyItemsArray.push($(this)[0].outerHTML)
        });
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
        func: `toggleNewFolderLitebox()`
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
        func: `moreFunctions.paste.call()`
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
    return `<div class="card mb-2 border-0 rounded-0">
    <div class="p-2 d-flex justify-content-around">
        <div class="icon d-flex"><i class="fa-solid fa-circle-check select-icon"></i><i class="fs-3 fa-solid ${el.icon} accent-color opacity-75"></i></div>
        <div class="card-details ps-3">
            <div class="card-name truncate" onClick="docMove = true; ${el.func};" title="${el.name}">${el.name}</div>
            <div class="text-muted">
                <span>Modified by John Smith</span><span class="ms-2">•</span><span
                    class="ms-2">3/22/21 1:02 PM </span>
            </div>
           ${el.docs == true ? createDocs() : ''} 
        </div>
   <div>
   <button type="button" class="btn btn-sm btn-new mb-auto more-options" data-bs-toggle="dropdown" aria-expanded="false"><i class="fs-5 fa-solid fa-ellipsis-vertical accent-color"></i></button>
    ${moreOptionsTemplate}
   </div>
    </div>
</div>`
}

function createDocs() {
    return `<div class="text-muted">
    <a class="btn btn-sm btn-new p-0" href="#">Documents</a><span class="ms-2">•</span><a
        class="ms-2 btn btn-sm btn-new p-0" href="#">Appointments</a>
</div>`
}



const plusOptions = [
    {
        id: 1,
        name: 'Upload Files',
        icon: 'fa-file-arrow-up',
        func:`javascript:void(0)`
    },
    {
        id: 2,
        name: 'Create New Folder',
        icon: 'fa-folder-plus',
        func:`toggleNewFolderLitebox()`
    }
]

const plusOptionsTemplate = `<button class="btn btn-sm btn-primary btn-quick ms-3 dropdown-toggle" type="button"
id="dropdown-plus-options" data-bs-toggle="dropdown" aria-expanded="false">
<i class="fa-solid fa-plus"></i>
</button>
<ul class="dropdown-menu" aria-labelledby="dropdown-plus-options">
${plusOptions.map(createPlusOptions).join("")}
</ul>`

function createPlusOptions(el) {
    return `<li>
    <button type="button" onclick="${el.func}"
        class="btn btn-sm btn-new d-inline-flex align-items-center p-2 mx-2">
        <i class="fa-solid ${el.icon} me-2"></i>${el.name}
    </button>
</li>`
}

$('#plus-options').append(plusOptionsTemplate);
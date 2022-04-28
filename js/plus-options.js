const plusOptions = [
    {
        id: 1,
        name: 'Upload Files Here',
        icon: 'fa-file-arrow-up',
        func:`javascript:void(0)`
    },
    {
        id: 2,
        name: 'Create New Sub Folder',
        icon: 'fa-folder-plus',
        func:`toggleNewFolderLitebox()`
    },
    {
        id: 3,
        name: 'Cut',
        icon: 'fa-scissors',
        func:`moreFunctions.multiCut.call()`
    },
    {
        id: 4,
        name: 'Copy',
        icon: 'fa-copy',
        func:`moreFunctions.multiCopy.call()`
    },
    {
        id: 5,
        name: 'Paste',
        icon: 'fa-clipboard',
        func:`moreFunctions.paste.call()`
    },
    {
        id: 6,
        name: 'Toggle Select Mode',
        icon: 'fa-square-check',
        func: `moreFunctions.selectMode.call()`
    },
]

const plusOptionsTemplate = `<button class="btn btn-sm btn-primary btn-quick ms-3 dropdown-toggle" type="button"
id="dropdown-plus-options" data-bs-toggle="dropdown" aria-expanded="false">
<i class="fa-solid fa-plus"></i>
</button>
<ul class="dropdown-menu" aria-labelledby="dropdown-plus-options">
${plusOptions.map(createPlusOptions).join("")}
</ul>`

function createPlusOptions(el) {
    return `<li class="w-100">
    <button type="button" onclick="${el.func}"
        class="btn btn-sm btn-new d-inline-flex align-items-center p-2 mx-2">
        <i class="fa-solid ${el.icon} me-2"></i>${el.name}
    </button>
</li>`
}

$('#plus-options').append(plusOptionsTemplate);
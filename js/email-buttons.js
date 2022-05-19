const emailButtons = [
    {
        name: '',
        icon: 'fa-bars',
    },
    {
        name: 'New Message',
        icon: 'fa-pen',
    },
    {
        name: 'Delete',
        icon: 'fa-trash',
    },
    {
        name: 'Archive',
        icon: 'fa-box-archive',
    },
    {
        name: 'Junk',
        icon: 'fa-ban',
    },
    {
        name: 'Sweep',
        icon: 'fa-broom',
    },
    {
        name: '',
        icon: 'fa-ellipsis',
    },
]

function createEmailButtons(el) {
    return `<button type="button" class="btn btn-sm ${el.name == 'New Message' ? 'btn-primary' : 'btn-new'} me-3"><i class="fa-solid ${el.icon} ${el.name ? 'me-2' : ''}"></i>${el.name}</button>`
}

$('#email-buttons').append(emailButtons.map(createEmailButtons).join(''));
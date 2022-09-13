const formItems = [
    {
        id: 'cm-start-date',
        name: 'Start Date',
        type: 'date',
        placeholder: 'MM/DD/YYYY'
    },
    {
        id: 'cm-suit-status',
        name: 'Suit Status',
        options: [
            {
                val: 1,
                name: 'One',
            },
            {
                val: 2,
                name: 'Two',
            },
            {
                val: 3,
                name: 'Three',
            },
        ]
    },
    {
        id: 'cm-significant-reason-check',
        name: 'Significant Reason?',
        type: 'checkbox',
    },
    {
        id: 'cm-significant-reason',
        name: 'Significant Reason',
        type: 'text',
        placeholder: 'Add Reason'
    },
    {
        id: 'cm-total-spend',
        name: 'Total Spend',
        type: 'number',
        placeholder: '10000'
    },
]


//create the parent for form category container
function createParentCategoryContainer(el) {
    return `
    <div id="${el.id}" class="p-3 bg-white mt-2">
        <div class="pb-1 border-bottom d-flex align-items-center justify-content-between">
            <h6 class="m-0 pb-2">${el.name}</h6>
            <a class="btn btn-sm btn-new" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#${el.id}-sub">
            <i class="fs-6 fa-solid fa-chevron-down rotate"></i>
            </a>
        </div>
        <div id="${el.id}-sub" class="pt-3 collapse show">
        ${el.items.map(createCategoryFormFields).join('')}
        </div>
    </div>`
}

//create individual form fields inside the parent container
function createCategoryFormFields(el) {
    //if condition for select dropdown field
    if (el.options) {
        return `
        <div class="mb-3">
        <label for="${el.id}" class="form-label">${el.name}</label>
        <select class="form-select" tabindex="0">
                ${el.options.map(createSubFormFields).join('')}
        </select>
        </div>`
    }
    //if condition for checkbox
    else if (el.type === 'checkbox') {
        return `
        <div class="mb-3 form-check">
            <input type=${el.type} class="form-check-input" id="${el.id}" style="display:block !important" tabindex="0" required>
            <label for="${el.id}" class="form-check-label">${el.name}</label>
        </div>`
    }
    //else condition for regular formfields
    else {
        return `
    <div class="mb-3">
        <label for="${el.id}" class="form-label">${el.name}</label>
        <input type=${el.type} class="form-control" id="${el.id}" placeholder="${el.placeholder}" tabindex="0">
    </div>`
    }

    //creating dropdown options
    function createSubFormFields(el) {
        return `<option value="${el.val}">${el.name}</option>`
    }
}

//creating category container 
function createCategoryContainer(id,name) {
    let tempCategory = {
        id: id,
        name: name,
        items: formItems.slice(Math.floor(Math.random() * formItems.length))
    }
    let tempcontainer = createParentCategoryContainer(tempCategory);
    $('#matter-submission-form').append(tempcontainer);
    formValidation();
}

//deleting category container
function deleteCategoryContainer(el) {
    // if ($('#card-container').children().length > 2) {
        $('#matter-submission-form').children().remove(el);
    // }
}
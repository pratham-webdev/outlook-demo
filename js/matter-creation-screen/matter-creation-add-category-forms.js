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
    <h6 class="m-0 pb-2">${el.name}</h6>  
    ${el.items.map(createCategoryFormFields).join('')}
    </div>`
}

//create individual form fields inside the parent container
function createCategoryFormFields(el) {
    //if condition for select dropdown field
    if (el.options) {
        return `
        <div class="mb-3">
        <label for="${el.id}" class="form-label">${el.name}</label>
        <select class="form-select">
                ${el.options.map(createSubFormFields).join('')}
        </select>
        </div>`
    }
    //if condition for checkbox
    else if (el.type === 'checkbox') {
        return `
        <div class="mb-3 form-check">
            <input type=${el.type} class="form-check-input" id="${el.id}" style="display:block !important">
            <label for="${el.id}" class="form-check-label">${el.name}</label>
        </div>`
    }
    //else condition for regular formfields
    else {
        return `
    <div class="mb-3">
        <label for="${el.id}" class="form-label">${el.name}</label>
        <input type=${el.type} class="form-control" id="${el.id}" placeholder="${el.placeholder}">
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
    $('#card-container').append(tempcontainer);
}

//deleting category container
function deleteCategoryContainer(el) {
    // if ($('#card-container').children().length > 2) {
        $('#card-container').children().remove(el);
    // }
}
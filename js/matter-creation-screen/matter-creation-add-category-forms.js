const formItems = [
    {
        id: 'cm-start-date',
        name: 'Start Date',
        type: 'date',
        placeholder: 'MM/DD/YYYY',
        required: false,
    },
    {
        id: 'cm-suit-status',
        name: 'Suit Status',
        required: false,
        type: 'dropdown',
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
        required: true,
    },
    {
        id: 'cm-significant-reason',
        name: 'Significant Reason',
        type: 'text',
        placeholder: 'Add Reason',
        required: true,
    },
    {
        id: 'cm-total-spend',
        name: 'Total Spend',
        type: 'number',
        placeholder: '10000',
        required: false,
    },
    {
        id: 'cm-contacts',
        name: 'Assignees',
        type: 'datalist',
        required: false,
        options: [
            {
                val: 'Abraham Perry',
            },
            {
                val: 'Brad Bennigton',
            },
            {
                val: 'Brylee Booker',
            },
            {
                val: 'Castiel Wayne',
            },
            {
                val: 'David Blaine',
            },
            {
                val: 'Damien Haas',
            },
            {
                val: 'Dario Rice',
            },
            {
                val: 'Deacon Armstrong',
            },
            {
                val: 'Jameson Rubio',
            },
            {
                val: 'Jenny Mcguire',
            },
            {
                val: 'Leia Henderson',
            },
            {
                val: 'Keira Morales',
            },
            {
                val: 'Pedro Cox',
            },
        ]
    },
    {
        id: 'cm-notes',
        name: 'Memo Notes',
        type: 'textarea',
        placeholder: 'Add notes here',
        required: true,
    },
]


//create the parent for form category container
function createParentCategoryContainer(el) {
    return `
    <div id="${el.id}" class="p-3 bg-white mt-2">
        <div class="py-2 px-3 border-top border-bottom d-flex align-items-center justify-content-between" style="${categoryGeneralSectionStyles}">
            <h6 class="m-0 accent-color">${el.name}</h6>
            <a class="btn btn-sm btn-new category-collapsible" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#${el.id}-sub">
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
    if (el.type === 'dropdown') {
        return `
        <div class="mb-3">
        <label for="${el.id}" class="form-label">${el.name} ${el.required === true ? `<span class="text-danger fw-bold">*</span>` : ''}</label>
        <select id="${el.id}" class="form-select" tabindex="0" ${el.required === true ? `required` : ''}>
         ${el.options.map(createSubFormFields).join('')}
        </select>
        </div>`
    }
    //else if condition for select dropdown field
    if (el.type === 'datalist') {
        return `
        <div class="mb-3">
        <label for="${el.id}" class="form-label">${el.name} ${el.required === true ? `<span class="text-danger fw-bold">*</span>` : ''}</label>
        <input class="form-control" list="${el.id}"  placeholder="Type to search...">
        <datalist id="${el.id}" tabindex="0" ${el.required === true ? `required` : ''}>
         ${el.options.map(createSubFormFields).join('')}
        </select>
        </div>`
    }
    //if condition for checkbox
    else if (el.type === 'checkbox') {
        return `
        <div class="mb-3 form-check">
            <input type=${el.type} class="form-check-input" id="${el.id}" style="display:block !important" tabindex="0" ${el.required === true ? `required` : ''}>
            <label for="${el.id}" class="form-label mb-0">${el.name} ${el.required === true ? `<span class="text-danger fw-bold">*</span>` : ''}</label>
        </div>`
    }
    //else condition for regular formfields
    else if (el.type === 'textarea') {
        return `
    <div class="mb-3">
        <label for="${el.id}" class="form-label">${el.name} ${el.required === true ? `<span class="text-danger fw-bold">*</span>` : ''}</label>
        <textarea class="form-control" id="${el.id}" placeholder="${el.placeholder}" tabindex="0" ${el.required === true ? `required` : ''}></textarea>
    </div>`
    }
    //else condition for regular formfields
    else {
        return `
    <div class="mb-3">
        <label for="${el.id}" class="form-label">${el.name} ${el.required === true ? `<span class="text-danger fw-bold">*</span>` : ''}</label>
        <input type=${el.type} class="form-control" id="${el.id}" placeholder="${el.placeholder}" tabindex="0" ${el.required === true ? `required` : ''}>
    </div>`
    }

    //creating dropdown options
    function createSubFormFields(el) {
        if (el.name) {
            return `<option value="${el.val}">${el.name}</option>`
        }
        else {
            return `<option value="${el.val}">`
        }
    }
}

//creating category container 
function createCategoryContainer(id, name) {
    let tempCategory = {
        id: `cat-${id}`,
        name: name,
        items: formItems.slice(Math.floor(Math.random() * formItems.length))
    }

    let tempcontainer = createParentCategoryContainer(tempCategory);
    $('#matter-submission-form').append(tempcontainer);
    formValidation();
}

//deleting category container
function deleteCategoryContainer(id) {
    // if ($('#card-container').children().length > 2) {
    $('#matter-submission-form').children().remove("#cat-" + id);
    // }
}


function rotateCategoryCollapsible(){
    $('#matter-submission-form').on('click', '.category-collapsible', function () {
        if($(this).children('i').hasClass('rotate') === true){
            $(this).children('i').removeClass('rotate');
        }
        else{
            $(this).children('i').addClass('rotate');
        }
    });
}
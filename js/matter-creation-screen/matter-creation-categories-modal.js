const mainCategoriesList = [{
    id:'cm-category-disputes',
    name:'Disputes',
    padding:'ps-3',
    items:[
        {
            id:'cm-category-contracts',
            name:'Contracts',
            padding:'ps-4',
            func:`toggleCategoryCheckboxes('Contracts')`,
            items: [
                {
                    id:1,
                    name:'Breach of Contract',
                },
                {
                    id:2,
                    name:'Breach Of Warranty',
                },
                {
                    id:3,
                    name:'Confidentiality Breach',
                },
                {
                    id:4,
                    name:'Breach of Trust',
                },
            ],
        },
        {
            id:'cm-category-environmental',
            name:'Environmental',
            padding: 'ps-4',
            func:`toggleCategoryCheckboxes('Environmental')`,
            items: [
                {
                    id:1,
                    name:'Remediation Site',
                },
                {
                    id:2,
                    name:'Water',
                },
                {
                    id:3,
                    name:'Audits',
                },
                {
                    id:4,
                    name:'Land Use',
                },
            ],
        },
        {
            id:'cm-category-regulatory',
            name:'Regulatory and Compliance',
            padding: 'ps-4',
            func:`toggleCategoryCheckboxes('Regulatory and Compliance')`,
            items: [
                {
                    id:1,
                    name:'Labor Benefits'
                },
                {
                    id:2,
                    name:'Money Laundering'
                },
                {
                    id:3,
                    name:'Business Conduct'
                },
                {
                    id:4,
                    name:'SEC Filings'
                },
            ],
        },
        {
            id:'cm-category-liability',
            name:'General Liability/Claim',
            padding: 'ps-4',
            func:`toggleCategoryCheckboxes('General Liability/Claim')`,
            items: [
                {
                    id:1,
                    name:'Premise'
                },
                {
                    id:2,
                    name:'Product Liability'
                },
                {
                    id:3,
                    name:'Bodily Injury'
                },
                {
                    id:4,
                    name:'Property Damage'
                },
            ],
        },
    ]
}]

let paddingVal = 5;


//creation of the top list of categories, triggers "createCategoryList" repetivite function
function createCategoryListTemplate(arr) {
    return `<nav class="bd-links pt-3 pb-3 px-lg-2 px-md-2 px-sm-2 px-2">${createCategoryList(arr)}</nav>`;
}

//createCategoryList function to create nav items
function createCategoryList(arr) {
    let tempNavListArr = arr.map(createCategoryListItems);
    return tempNavListArr.join("");
}

//creating the sub items using the above function again
function createCategoryListItems(el) {
    return `
    <div class="mb-2">
        <div class="hover d-flex align-items-center rounded w-100 ${el.padding ? '' : 'ps-4'}">
           ${el.padding ? `<button class="btn" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#${el.id}" ${el.func ? `onclick=${el.func}` : ''}></button>` : '' }
            <div class="d-flex" tabindex="0" title="${el.name}">
                <input type="checkbox" class="form-check-input me-2" id="${el.id}" style="display:block !important">
                ${el.name}
            </div>
        </div>
        ${el.items ? 
            `<div id="${el.id}" class="collapse show ${el.padding ? el.padding : 'ps-2'}">
            ${createCategoryList(el.items)}
             </div>` 
             : ''}
  </div>`;
}

// div template of the litebox, the place where we add the categories list
const addCategoriesLitebox = `<div class="litebox m-4">
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
    <h5 class="text-header m-0">Add Categories</h5>
    <button class="btn btn-sm btn-new" onclick="toggleLitebox('#add-categories-panel')"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div class="px-2">
    <div id="add-categories-list">
    </div>
</div>
</div>`

//adding the litebox to the modal base in index html
$('#add-categories-panel-sub').append(addCategoriesLitebox);

//triggering jquery to initiate dom building
$('#add-categories-list').append(createCategoryListTemplate(mainCategoriesList));
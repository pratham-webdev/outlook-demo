const assigneesList= [
    {
        val: 'Ava, Chaney',
    },
    {
        val: 'Black, Mckee',
    },
    {
        val: 'Chang , Jasmine',
    },
    {
        val: 'Ellis, Newton',
    },
    {
        val: 'Debbie, Rojas',
    },
    {
        val: 'Doe, Jane',
    },
    {
        val: 'Goldman, Jack',
    },
    {
        val: 'Jade, Casey',
    },
    {
        val: 'Marks, Cardenas',
    },
    {
        val: 'Matilda, Estes',
    },
    {
        val: 'Michele, Watkins',
    },
    {
        val: 'Ruiz, Page',
    },
    {
        val: 'Wiley, Sosa',
    },
]


// div template of the litebox, the place where we add the categories list
const addAssigneesLitebox = `<div class="litebox m-4">
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
    <h5 class="text-header m-0">Add Assignees</h5>
    <button class="btn btn-sm btn-new" onclick="toggleLitebox('#add-assignees-panel')"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div class="px-2">
<div id="assignee-litebox-search" class="py-2 pb-2">
        <label for="matterAssignees" class="form-label">Search for Assignees</label>
        <input type="search" placeholder="Assignee name" class="form-control" id="matterAssignees" aria-describedby="matterAssignees">
        </div>
    </div>
    <div id="add-assignees-list" class="px-3 pb-3">
    
</div>
</div>`

function createAssigneeList(item){
    return `
    <div class="form-check py-1">
        <input class="form-check-input" type="radio" name="assignees" id="${item.val}">
        <label class="form-check-label fs-small" for="${item.val}">
            ${item.val}
        </label>
    </div>
    `
}

function buildAssigneesModal(key) {
    $('#add-assignees-panel-sub').empty();
    
    //adding the litebox to the modal base in index html
    $('#add-assignees-panel-sub').append(addAssigneesLitebox);

    //triggering jquery to initiate dom building
    // $('#add-assignees-list').append(assigneesList.map(createAssigneeList).join(""));

    //adding category checkbox event listeners
    $('#add-assignees-list').on('click', '.form-check-input', function () {
        $('.cm-contacts').val($(this).attr('id'));
    });
}
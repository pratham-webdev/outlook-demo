//create form here
const taskSubmissionForm = `
<form id="tasks-submission-form" class="needs-validation" novalidate></form>`

const tasksTitleContainer = `
<div id="tasks-title-container" class="d-flex justify-content-between align-items-center border-top mt-2 py-1">
    <div class="px-3 d-flex align-items-center">
        <h6 class="m-0">Tasks</h6>  
    </div>
        <div class="d-flex align-items-center">
            <span class="text-muted">Sort By:</span>
            <select class="form-select selection" aria-label="Default select example">
                <option selected>Due on</option>
                <option value="1">Latest</option>
                <option value="2">Oldest</option>
            </select>
            <button class="btn btn-sm btn-new"><i
             class="fs- fa-solid fa-arrow-down-wide-short"></i></button>
        </div>
    </div>`

    function createTasksTitleContainer(){
        return `
        <div id="create-tasks-title-container" class="px-3 py-2 bg-white-offset">
            <h6 class="m-0 pb-1">Create a Task</h6>  
            <div class="d-flex align-items-center">
                <div class="doc-title-header p-1 fs-6">
                    <i class="fa-solid fa-folder opacity-50 me-2"></i>
                    ${tempMatterName}
                </div>
            </div>
        </div>`
    } 

//create matter button & cancel buttons, added a disabled button to prevent enter key from submitting the form on matter creation
const tasksCreationButtonSection = `
<div class="p-3 border-top bg-white form-sticky-bottom-buttons">
<div class="d-flex align-items-center justify-content-between">
<button type="submit" disabled style="display: none" aria-hidden="true">Disabled button to prevent enter key submission</button>
<button class="btn btn-sm btn-outline-primary flex-grow-1 me-1" onclick="cancelTasksCreation()">Cancel</button>
<button type="submit" class="btn btn-sm btn-primary flex-grow-1 ms-1" onclick="saveTasksCreation()">Save</button>
</div>
`;
//create matter button & cancel buttons, added a disabled button to prevent enter key from submitting the form on matter creation
const tasksCreationButtonSection = `
<div class="p-3 border-top bg-white form-sticky-bottom-buttons">
<div class="d-flex align-items-center justify-content-between">
<button type="submit" disabled style="display: none" aria-hidden="true">Disabled button to prevent enter key submission</button>
<button class="btn btn-sm btn-outline-primary flex-grow-1 me-1" onclick="cancelTasksCreation()">Cancel</button>
<button type="submit" class="btn btn-sm btn-primary flex-grow-1 ms-1" onclick="saveTasksCreation()">Save</button>
</div>
`;
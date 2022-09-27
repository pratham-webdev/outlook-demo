//create form here
const matterSubmissionForm = `
<form id="matter-submission-form" class="needs-validation" novalidate></form>
`

//select category section
const categorySection = `
<div class="p-3 bg-white">
  <div class="d-flex justify-content-between align-items-center">
    <h6 class="m-0">Select Categories</h6>  
    <button type="button" class="btn btn-sm btn-new-rounded" onclick="toggleLitebox('#add-categories-panel');"><i class="fa-solid fa-circle-plus me-2"></i>
    Add
    </button>
  </div>
  <div id="added-categories-list" class="d-flex flex-wrap">
      <div class="card rounded-pill px-3 py-1 text-center accent-color mt-2 me-1">Disputes</div>
  </div>
</div>
`;

//add items to the selected categories section
function createSelectedCategoriesSection(id,name){
  let tempDiv = `<div id="category-${id}" class="card rounded-pill px-3 py-1 text-center accent-color mt-2 me-1">${name}</div>`;
  $('#added-categories-list').append(tempDiv);
}

//delete items from the selected categories section
function deleteSelectedCategoriesSection(id){
  $('#added-categories-list').children().remove(`#category-${id}`);
}

//default general matter info section
const categoryGeneralInfoSection = `
<div class="p-3 bg-white mt-2">
<h6 class="m-0 pb-2">General Information</h6>  
<div class="mb-3">
  <label for="matter-name" class="form-label">Matter Name</label>
  <input type="text" class="form-control" id="matter-name" placeholder="Matter Name 123" required>
</div>
</div>
`;

let categoryButtonSectionStyle = `
position: absolute;
width: 100%;
bottom: 0;
`

//create matter button & cancel buttons
const categoryButtonSection = `
<div class="p-3 border-top bg-white" style="${categoryButtonSectionStyle}">
<div class="d-flex align-items-center justify-content-between">
<button class="btn btn-sm btn-outline-primary flex-grow-1 me-1" onclick="cancelMatterCreation()">Cancel</button>
<button type="submit" class="btn btn-sm btn-primary flex-grow-1 ms-1" onclick="saveMatterCreation()">Save</button>
</div>
`;
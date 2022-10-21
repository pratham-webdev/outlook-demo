//create form here
const matterSubmissionForm = `
<form id="matter-submission-form" class="needs-validation" novalidate></form>`

//select category section
const categorySection = `
<div class="p-3 bg-white">
  <div class="py-2 px-3 border-top border-bottom d-flex align-items-center justify-content-between form-section-background">
     <h6 class="m-0 py-1 accent-color">Selected Categories</h6>
     <button type="button" class="btn btn-sm btn-new-rounded" onclick="toggleLitebox('#add-categories-panel');"><i class="fa-solid fa-circle-plus me-2"></i>
      Add
    </button>
  </div>
  <div class=" py-2">
        <label for="primary-category-container" class="form-label">Primary Category</label>
        <select id="primary-category-container" class="form-select primary-category-container" tabindex="0">
        <option value="1">Disputes</option>     
        </select>
</div>
<label for="added-categories-list" class="form-label mb-0">Additional Categories</label>
  <div id="added-categories-list" class="d-flex flex-wrap">
  </div>
</div>
`;

//add items as badges to the selected categories section
function createSelectedCategoriesSection(id,name){
  let tempDiv = `<div id="category-${id}" class="card rounded-pill px-3 py-1 text-center accent-color mt-2 me-1 pointer card-badges" onclick="toggleLitebox('#add-categories-panel');">${name}</div>`;
  $('#added-categories-list').append(tempDiv);
}

//delete items as badges from the selected categories section
function deleteSelectedCategoriesSection(id){
  $('#added-categories-list').children().remove(`#category-${id}`);
}


//default general matter info section
const categoryGeneralInfoSection = `
<div class="p-3 bg-white mt-2">
  <div class="py-2 px-3 border-top border-bottom d-flex align-items-center justify-content-between form-section-background">
    <h6 class="m-0 py-1 accent-color">General Information</h6>
  </div>
<div class="mb-3 pt-2">
  <label for="matter-name" class="form-label">Matter Name <span class="text-danger fw-bold">*</span></label>
  <input type="text" class="form-control" id="matter-name" placeholder="Matter Name 123" required>
</div>
</div>
`;

//create matter button & cancel buttons, added a disabled button to prevent enter key from submitting the form on matter creation
const categoryButtonSection = `
<div class="p-3 border-top bg-white form-sticky-bottom-buttons">
<div class="d-flex align-items-center justify-content-between">
<button type="submit" disabled style="display: none" aria-hidden="true">Disabled button to prevent enter key submission</button>
<button class="btn btn-sm btn-outline-primary flex-grow-1 me-1" onclick="cancelMatterCreation()">Cancel</button>
<button type="submit" class="btn btn-sm btn-primary flex-grow-1 ms-1" onclick="saveMatterCreation()">Save</button>
</div>
`;
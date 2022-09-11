//select category section
const categorySection = `
<div class="p-3 bg-white">
<h6 class="m-0">Select Categories</h6>  
<button type="button" class="btn btn-sm btn-new-rounded mt-2" onclick="toggleLitebox('#add-categories-panel')">1 Selected Category<i class="fa-solid fa-circle-plus ms-3"></i></button>
</div>
`;
//default general matter info section
const categoryGeneralInfoSection = `
<div class="p-3 bg-white mt-2">
<h6 class="m-0 pb-2">General Information</h6>  
<div class="mb-3">
  <label for="matter-name" class="form-label">Matter Name</label>
  <input type="text" class="form-control" id="matter-name" placeholder="Matter Name 123">
</div>
</div>
`;

let categoryButtonSectionStyle = `
position: absolute;
width: 100%;
bottom: 10px;
`

//default general matter info section
const categoryButtonSection = `
<div class="p-3 border-top bg-white" style="${categoryButtonSectionStyle}">
<div class="d-flex align-items-center justify-content-between">
<button class="btn btn-sm btn-outline-primary flex-grow-1 me-1">Cancel</button>
<button class="btn btn-sm btn-primary flex-grow-1 ms-1">Save</button>
</div>
`;
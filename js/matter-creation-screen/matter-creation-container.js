//select category section
const categorySection = `
<div class="p-3 bg-white">
<h6 class="m-0">Select Categories</h6>  
<button type="button" class="btn btn-sm btn-new-rounded mt-2" onclick="toggleLitebox('#add-categories-panel')">1 Selected Category<i class="fa-solid fa-circle-plus ms-3"></i></button>
<button type="button" class="btn btn-sm btn-new-rounded mt-2" onclick="createCategoryContainer('bk')">Create Parent<i class="fa-solid fa-circle-plus ms-3"></i></button>
<button type="button" class="btn btn-sm btn-new-rounded mt-2" onclick="deleteCategoryContainer()">Delete Parent<i class="fa-solid fa-circle-plus ms-3"></i></button>
<button type="button" class="btn btn-sm btn-new-rounded mt-2">Create Child<i class="fa-solid fa-circle-plus ms-3"></i></button>
</div>
`;
//default general matter info section
const generalInfoSection = `
<div class="p-3 bg-white mt-2">
<h6 class="m-0 pb-2">General Information</h6>  
<div class="mb-3">
  <label for="matter-name" class="form-label">Matter Name</label>
  <input type="text" class="form-control" id="matter-name" placeholder="Matter Name 123">
</div>
</div>
`;
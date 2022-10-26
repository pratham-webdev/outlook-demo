const CreationToast =
 `<div id="creation-toast" class="toast align-items-center text-white bg-success border-0 generic-toast-style" role="alert">
  <div class="d-flex">
    <div class="toast-body">
      <span id="creation-toast-text">Matter</span> Created Successfully!
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="$('#creation-toast').hide();" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>`;

const requiredFieldsToast = `
<div id="required-fields-toast" class="toast align-items-center text-white bg-danger border-0 generic-toast-style" role="alert">
<div class="d-flex">
  <div class="toast-body">
  Please fill the required fields!
  </div>
  <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="$('#required-fields-toast').hide();" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
</div>`

$('.sidepanel').append(CreationToast,requiredFieldsToast);

function toggleToast(id){
    $(id).show();//showing matter created toast
    setTimeout(() => {
    $(id).hide();//hiding matter created toast on timeout
    }, 6000);
}
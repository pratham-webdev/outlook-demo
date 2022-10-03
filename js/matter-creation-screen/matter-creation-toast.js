let matterCreationToastStyle=`
position:absolute;
width:100%;
border-radius:0;
top:98px;
`

const matterCreationToast = `
<div id="matter-creation-toast" class="toast align-items-center text-white bg-success border-0" role="alert" style="${matterCreationToastStyle}">
<div class="d-flex">
  <div class="toast-body">
    Matter Created Successfully!
  </div>
  <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="$('#matter-creation-toast').hide();" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
</div>`

$('.sidepanel').append(matterCreationToast);

function showMatterToast(){
    $('#matter-creation-toast').show();//showing matter created toast
    setTimeout(() => {
    $('#matter-creation-toast').hide();//hiding matter created toast on timeout
    }, 3000);
}
const emailFileLiteboxTemplate = `<div class="litebox m-4">
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
    <h5 class="text-header m-0">Uploading Files </h5>
    <button class="btn btn-sm btn-new" onclick="toggleLitebox('#email-upload-file-panel'); resetEmailDocUpload();"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div class="p-3">
    <div>
        <div class="mb-3">
            <label for="emailDocName" class="form-label">File Name</label>
            <input type="text" class="form-control" id="emailDocName" aria-describedby="emailDocName">
        </div>
        <div class="d-flex align-items-center justify-content-between">
        <button type="submit" class="btn btn-sm btn-outline-primary ms-2" onclick="emailDocNumber = selectedDocsArr.length; editEmailDocUpload(true)">Skip</button>
        <div>
        <button type="submit" class="btn btn-sm btn-outline-primary" onclick="toggleLitebox('#email-upload-file-panel'); resetEmailDocUpload();">Cancel</button>
        <button type="submit" class="btn btn-sm btn-primary" onclick="editEmailDocUpload()">Upload</button>
        </div>
        </div>
    </div>
</div>
</div>`

const fileProgressLiteboxTemplate = `<div class="litebox m-4">
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
    <h5 class="text-header m-0">Upload Completed</h5>
    <button class="btn btn-sm btn-new" onclick="toggleLitebox('#file-progress-panel')"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div class="p-3">
    <div id="completed-files-list">
        This is file upload
    </div>
</div>
</div>`

//creating email-files list in the email-files modal
function createCompleteFiles(docs) {
    $('#completed-files-list').empty();
    let tempEmailDocsArr;
    if($.isArray(docs)){
        tempEmailDocsArr = docs.map(createCompleteFilesItems).join('');
    }
    else{
        tempEmailDocsArr = createCompleteFilesItems(docs);
    }
    $('#completed-files-list').append(tempEmailDocsArr);
}
//creating individual list UI for the email-files list
function createCompleteFilesItems(item) {
    return `<div class="fw-normal pb-2 small rounded d-flex justify-content-between" title="${item.name}"><div><i class="fa-solid ${item.icon} accent-color me-2"></i><span class="truncate">${item.name}</span></div><i class="fa-solid fa-circle-check text-success ms-2 uploaded"></i></div>`
}

$('#email-upload-file-panel-sub').append(emailFileLiteboxTemplate);
$('#file-progress-panel-sub').append(fileProgressLiteboxTemplate);



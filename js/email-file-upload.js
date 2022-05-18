const emailFileLiteboxTemplate = `<div class="litebox m-4">
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
    <h5 class="text-header m-0">Uploading Files </h5>
    <button class="btn btn-sm btn-new" onclick="toggleLitebox('#email-upload-file-panel')"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div class="p-3">
    <div>
        <div class="mb-3">
            <label for="emailDocName" class="form-label">File Name</label>
            <input type="text" class="form-control" id="emailDocName" aria-describedby="emailDocName">
        </div>
        <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-sm btn-primary" onclick="editEmailDocUpload()">Upload</button>
        <button type="submit" class="btn btn-sm btn-outline-primary ms-2" onclick="emailDocNumber = selectedDocsArr.length; editEmailDocUpload()">Skip Editing</button>
        </div>
    </div>
</div>
</div>`

$('#email-upload-file-panel-sub').append(emailFileLiteboxTemplate);


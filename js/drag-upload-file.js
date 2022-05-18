const dragFileLiteboxTemplate = `<div class="litebox m-4">
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
    <h5 class="text-header m-0">Upload Files</h5>
    <button class="btn btn-sm btn-new" onclick="toggleLitebox('#drag-upload-file-panel')"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div class="p-3">
    <div>
        <div class="mb-3">
            <label for="dragFileName" class="form-label">File Name</label>
            <input type="text" class="form-control" id="dragFileName" aria-describedby="dragFileName">
        </div>
        <button type="submit" class="btn btn-sm btn-primary" onclick="dragUploadFile()">Upload</button>
    </div>
</div>
</div>`

$('#drag-upload-file-panel-sub').append(dragFileLiteboxTemplate);


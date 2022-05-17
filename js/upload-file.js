const fileLiteboxTemplate = `<div class="litebox m-4">
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
    <h5 class="text-header m-0">Upload Files</h5>
    <button class="btn btn-sm btn-new" onclick="toggleLitebox('#upload-file-panel')"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div class="p-3">
    <div>
        <div class="mb-3">
            <label for="fileName" class="form-label">File Name</label>
            <input type="text" class="form-control" id="fileName" aria-describedby="fileName">
        </div>
        <button type="submit" class="btn btn-primary" onclick="uploadFile()">Upload</button>
    </div>
</div>
</div>`

$('#upload-file-panel-sub').append(fileLiteboxTemplate);


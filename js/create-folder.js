const folderLiteboxTemplate = `<div class="litebox m-4">
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2 border-bottom">
    <h5 class="text-header m-0">Create New Folder</h5>
    <button class="btn btn-sm btn-new" onclick="toggleLitebox('#new-folder-panel')"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div class="p-3">
    <div>
        <div class="mb-3">
            <label for="folderName" class="form-label">Folder Name</label>
            <input type="text" class="form-control" id="folderName" aria-describedby="folderName">
        </div>
        <button type="submit" class="btn btn-primary" onclick="createFolder()">Create</button>
    </div>
</div>
</div>`

$('#new-folder-panel-sub').append(folderLiteboxTemplate);


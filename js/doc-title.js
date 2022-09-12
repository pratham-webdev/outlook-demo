function documentTitle(name){
    return `<div id="doc-title" class="d-flex align-items-center">
<button id="back-icon" class="btn btn-new mx-2 p-1" onclick="upDown()">
<i class="fs-5 fa-solid fa-arrow-left"></i>
</button>
<div class="doc-title-header p-1" onclick="folderLevel=0; createMatters();">
<i class="fs-5 fa-solid fa-folder opacity-50 me-2"></i>
${name}</div>
</div>
<div id="bread-crumb" class="px-2 d-flex flex-wrap"></div>`
}

function createDocumentTitle(name) {
    $('#doc-title-container').append(documentTitle(name));
}

function breadLink(name) {
    return `<div><a class="link-primary ms-1" href="#" onclick="upDown()" title="${name}">${name.length < 15 ? name : (name.substring(0,15)+"...")}</a><span class="ms-1">/</span></div>`
}

function createBreadCrumb(name) {
    $('#bread-crumb').append(breadLink(name));
}
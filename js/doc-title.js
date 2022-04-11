

const documentTitle = `  <div id="doc-title" class="d-flex align-items-center">
<button id="back-icon" class="btn btn-new ms-2 p-1" onclick="upDown()"><i class="fs-5 fa-solid fa-arrow-left"></i></button>
<div class="ms-2"><i class="fs-5 fa-solid fa-folder opacity-50"></i></div>
<div class="ms-2">Q10834534 - The State vs Isabella</div>
</div>
<div id="bread-crumb" class="px-2 d-flex"></div>`

function createDocumentTitle() {
    $('#doc-title-container').append(documentTitle);

}

function breadLink(name) {
    return `<div><a class="link-primary ms-1" href="#" onclick="upDown()">${name}</a><span class="ms-1">/</span></div>`
}

function createBreadCrumb(name) {
    $('#bread-crumb').append(breadLink(name));
}
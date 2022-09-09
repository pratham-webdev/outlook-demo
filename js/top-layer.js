const topLayer = `
<div class="d-flex align-items-center justify-content-between px-3 pt-3 pb-2">
    <h4 class="text-header m-0">Outlook Add-In</h4>
    <button class="btn btn-sm btn-new"><i class="fs-5 fa-solid fa-xmark"></i></button>
</div>
<div id="main-tabs" data-title="Hello" data-intro='Hello step one!'>
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Disputes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Transactions</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Documents</a>
        </li>
    </ul>
</div>
<div id="search-bar" class="p-3" data-title="Hello" data-intro='Hello step one!'>
    <form class="d-flex" style="height: 3vh;">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-sm btn-new"><i class="fs-5 fa-solid fa-sliders"></i></button>
    </form>
</div>
<div id="sub-tabs" class="px-3 pt-2">
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Disputes</a>
        </li>
        <li class="nav-item ms-2">
            <a class="nav-link" href="#">All Matters</a>
        </li>
        <li class="nav-item ms-2">
            <a class="nav-link" href="#">My Assigned</a>
        </li>
    </ul>
    <div class="d-flex justify-content-between align-items-center">
        <div class="py-2 d-flex align-items-center">
            <select class="form-select selection" aria-label="Default select example">
                <option selected>10</option>
                <option value="1">10</option>
                <option value="2">25</option>
                <option value="3">50</option>
                <option value="3">100</option>
                <option value="3">200</option>
            </select>
            <span>/120</span>
        </div>
        <div class="py-2 d-flex align-items-center">
            <span class="text-muted">Sort By:</span>
            <select class="form-select selection" aria-label="Default select example">
                <option selected>Modified On</option>
                <option value="1">Latest</option>
                <option value="2">Oldest</option>
            </select>
            <button class="btn btn-sm btn-new"><i
                    class="fs- fa-solid fa-arrow-down-wide-short"></i></button>
        </div>
    </div>
</div>`



$('#top-layer').prepend(topLayer);
const mattersDetails = [
    {
        id:1,
        name:'Documents',
        icon:'fa-folder',
        docs:false,
        func:`createLevel1('Documents')`
    },
    {
        id:2,
        name:'Calendar',
        icon:'fa-calendar',
        docs:false
    }
]

let mattersDetailsArr = mattersDetails.map(el => cardTemplate(el)).join("");

function createMattersDetails(){
    folderLevel == 0 ? createDocumentTitle($(this).attr('title')) : '';
    $('#card-container').empty();
    $('#card-container').append(mattersDetailsArr);
    $('#quick-nav-button').show();
    folderLevel = 1;
}
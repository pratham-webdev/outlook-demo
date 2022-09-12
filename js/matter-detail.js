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

function createMattersDetails(name){
    //disabling matter icon
    $('#create-matter-icon-button').attr('disabled', true);
    folderLevel == 0 ? createDocumentTitle(name) : ''; // sending name property for document title container
    $('#card-container').empty();
    $('#card-container').append(mattersDetailsArr);
    $('#quick-nav-button').show();
    folderLevel = 1;
}
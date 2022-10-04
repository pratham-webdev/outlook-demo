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

let tempName;

function createMattersDetails(name){
    //setting name
    name != undefined ? tempName = name : '';
    //disabling matter icon
    $('#create-matter-icon-button').attr('disabled', true);
    folderLevel == 0 ? createDocumentTitle(tempName) : ''; // sending name property for document title container
    $('#card-container').empty();
    $('#card-container').append(mattersDetailsArr);
    $('#quick-nav-button').show();
    folderLevel = 1;
}
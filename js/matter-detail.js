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
        name:'Appointments',
        icon:'fa-calendar',
        docs:false
    },
    {
        id:3,
        name:'Tasks',
        icon:'fa-clipboard-list',
        docs:false,
        func:`createTasksList()`
    }
]

let mattersDetailsArr = mattersDetails.map(el => cardTemplate(el)).join("");

let tempName; //saving name of selected matter

function createMattersDetails(name){
    //setting name
    name != undefined ? tempName = name : '';//logic to keep matter name when navigating the doc
    //disabling matter icon
    $('#create-matter-icon-button').attr('disabled', true);
    folderLevel == 0 ? createDocumentTitle(tempName) : ''; // sending name property for document title container
    $('#card-container').empty();
    $('#card-container').append(mattersDetailsArr);
    $('#quick-nav-upload-container').show();
    folderLevel = 1;
}
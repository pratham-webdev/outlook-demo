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
    folderLevel == 0 ? createDocumentTitle() : '';
    $('#card-container').empty();
    $('#card-container').append(mattersDetailsArr);
    folderLevel = 1;
}
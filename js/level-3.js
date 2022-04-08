const level3 = [
    {
        id:1,
        name:'meeting notes.txt',
        icon:'fa-file-lines',
        docs:false
    },
    {
        id:2,
        name:'recap.docx',
        icon:'fa-file-word',
        docs:false
    },
    {
        id:3,
        name:'deck.ppt',
        icon:'fa-file-powerpoint',
        docs:false
    },
    {
        id:4,
        name:'invoices.xlsx',
        icon:'fa-file-excel',
        docs:false
    }
]

let level3Arr = level3.map(el => cardTemplate(el)).join("");


function createLevel3(name){
    $('#card-container').empty();
    $('#card-container').append(level3Arr);
    folderLevel = 4;
    docMove == true ? createBreadCrumb(name) : '';
}

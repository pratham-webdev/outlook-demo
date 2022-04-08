const level1 = [
    {
        id:1,
        name:'Emails',
        icon:'fa-folder',
        docs:false,
        func:`createLevel2('Emails')`
    },
    {
        id:2,
        name:'Files',
        icon:'fa-folder',
        docs:false,
        func:`createLevel2('Files')`
    },
    {
        id:3,
        name:'Presentations',
        icon:'fa-folder',
        docs:false,
        func:`createLevel2('Presentations')`
    },
    {
        id:4,
        name:'Case Files',
        icon:'fa-folder',
        docs:false,
        func:`createLevel2('Case Files')`
    },
    {
        id:5,
        name:'Medical Records',
        icon:'fa-folder',
        docs:false,
        func:`createLevel2('Medical Records')`
    },
    {
        id:6,
        name:'Research',
        icon:'fa-folder',
        docs:false,
        func:`createLevel2('Research')`
    },
]

let level1Arr = level1.map(el => cardTemplate(el)).join("");


function createLevel1(name){
    $('#card-container').empty();
    $('#card-container').append(level1Arr);
    folderLevel = 2;
    docMove == true ? createBreadCrumb(name) : '';
}

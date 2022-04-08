const level2 = [
    {
        id:1,
        name:'Notes',
        icon:'fa-folder',
        docs:false,
        func:`createLevel3('Notes')`
    },
    {
        id:2,
        name:'Recordings',
        icon:'fa-folder',
        docs:false,
        func:`createLevel3('Recordings')`
    },
    {
        id:3,
        name:'Maps',
        icon:'fa-folder',
        docs:false,
        func:`createLevel3('Maps')`
    },
    {
        id:4,
        name:'Discussions',
        icon:'fa-folder',
        docs:false,
        func:`createLevel3('Discussions')`
    },
    {
        id:5,
        name:'Spreadsheets',
        icon:'fa-folder',
        docs:false,
        func:`createLevel3('Spreadsheets')`
    },
]

let level2Arr = level2.map(el => cardTemplate(el)).join("");


function createLevel2(name){
    $('#card-container').empty();
    $('#card-container').append(level2Arr);
    folderLevel = 3;
    docMove == true ? createBreadCrumb(name) : '';

}

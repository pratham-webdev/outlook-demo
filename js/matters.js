const matters = [
    {
        id:1,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:2,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:3,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:4,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:5,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
]

let mattersArr = matters.map(el => cardTemplate(el)).join("");

function createMatters(){
    $('#doc-title-container').empty();
    $('#card-container').empty();
    $('#card-container').append(mattersArr);
    folderLevel = 0;
}

createMatters();
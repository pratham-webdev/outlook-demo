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
    {
        id:6,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:7,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:8,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:9,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:10,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
    {
        id:11,
        name:'Q10834534 - The State vs Isabella',
        icon:'fa-briefcase',
        docs:true,
        func:`createMattersDetails()`
    },
]

let mattersArr = matters.map(el => cardTemplate(el)).join("");

function createMatters(){
    $('#doc-title-container').empty();
    $('#quick-nav-panel').removeClass('show');
    $('#quick-nav-button').hide();
    $('#card-container').empty();
    $('#card-container').append(mattersArr);
    folderLevel = 0;
}

createMatters();
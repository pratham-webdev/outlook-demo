const tasksListArray = [
    {
        id:1,
        name:'Taking Notes for the call',
        icon:'fa-clipboard-list',
        docs:false,
        status: {
            priority:'High',
            progress:'Not Started',
        }
    },
    {
        id:2,
        name:'Researching on the matter',
        icon:'fa-clipboard-list',
        docs:false,
        status: {
            priority:'High',
            progress:'Not Started',
        }
    },
    {
        id:3,
        name:'Collecting Records',
        icon:'fa-clipboard-list',
        docs:false,
        status: {
            priority:'High',
            progress:'Not Started',
        }
    },
    {
        id:4,
        name:'Collecting Exhibits',
        icon:'fa-clipboard-list',
        docs:false,
        status: {
            priority:'High',
            progress:'Not Started',
        }
    },
    {
        id:5,
        name:'Distributing Data',
        icon:'fa-clipboard-list',
        docs:false,
        status: {
            priority:'High',
            progress:'Not Started',
        }
    },
    {
        id:6,
        name:'Getting Sign Off',
        icon:'fa-clipboard-list',
        docs:false,
        status: {
            priority:'High',
            progress:'Not Started',
        }
    },
]

function createTasksList(){
    let createTaskButton = `<div style="${createMatterButtonStyle}">
    <button class="btn btn-sm btn-primary btn-quick ms-3" type="button" id="create-a-task-button" title="Create a Task">
    <i class="fa-solid fa-plus me-1"></i>
    Create a Task
    </button>
    </div>`
    $('#card-container').empty();
    $('#card-container').append(tasksListArray.map(cardTemplate).join("")+createTaskButton);
    $('#quick-nav-upload-container').hide();
    folderLevel = 2;
}
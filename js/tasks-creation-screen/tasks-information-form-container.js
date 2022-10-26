const taskItems = [
    {
        id: 'tasks-subject',
        name: 'Subject',
        type: 'text',
        placeholder: 'Add Subject',
        required: true,
    },
    {
        id: 'tasks-project',
        name: 'Project',
        type: 'text',
        placeholder: 'Add Project Name',
        required: true,
    },
    {
        id: 'tasks-matter-name',
        name: 'Matter Name',
        type: 'text',
        placeholder: 'Add Matter Name',
        required: true,
        disabled:true,
    },
    {
        id: 'tasks-end-date',
        name: 'Start Date',
        type: 'date',
        placeholder: 'MM/DD/YYYY',
        required: true,
    },
    {
        id: 'tasks-end-date',
        name: 'End Date',
        type: 'date',
        placeholder: 'MM/DD/YYYY',
        required: true,
    },
    {
        id: 'tasks-activity',
        name: 'Activity',
        required: true,
        type: 'dropdown',
        options: [
            {
                val: 1,
                name: 'One',
            },
            {
                val: 2,
                name: 'Two',
            },
            {
                val: 3,
                name: 'Three',
            },
        ]
    },
    {
        id: 'tasks-status',
        name: 'Status',
        required: true,
        type: 'dropdown',
        options: [
            {
                val: 1,
                name: 'Not Started',
            },
            {
                val: 2,
                name: 'In Progress',
            },
            {
                val: 3,
                name: 'Completed',
            },
        ]
    },
    {
        id: 'tasks-priority',
        name: 'Priority',
        required: true,
        type: 'dropdown',
        options: [
            {
                val: 1,
                name: 'Low',
            },
            {
                val: 2,
                name: 'Normal',
            },
            {
                val: 3,
                name: 'High',
            },
        ]
    },
    {
        id: 'tasks-complete',
        name: '% Complete',
        type: 'number',
        placeholder: '0',
        required: false,
    },
]

const tasksInformation = {
    id: `tasks-information-form-container`,
    name: 'Tasks Information',
    items: taskItems,
}


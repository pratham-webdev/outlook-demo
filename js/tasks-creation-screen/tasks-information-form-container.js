let today = new Date().toISOString().slice(0, 10);

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
        value: '',
        required: true,
        disabled:true,
    },
    {
        id: 'tasks-start-date',
        name: 'Start Date',
        type: 'date',
        value: today,
        required: true,
    },
    {
        id: 'tasks-end-date',
        name: 'End Date',
        type: 'date',
        value: today,
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
                val: 'Not Started',
                name: 'Not Started',
            },
            {
                val: 'In Progress',
                name: 'In Progress',
            },
            {
                val: 'Completed',
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
                val: 'Low',
                name: 'Low',
            },
            {
                val: 'Normal',
                name: 'Normal',
            },
            {
                val: 'High',
                name: 'High',
            },
        ]
    },
    {
        id: 'tasks-complete',
        name: '% Complete',
        type: 'number',
        placeholder: '0',
        required: true,
    },
]

const tasksInformation = {
    id: `tasks-information-form-container`,
    name: 'Tasks Information',
    items: taskItems,
}


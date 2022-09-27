const customObjects = [
    {
        id: 1,
        name: 'General Disputes',
        active: true,
    },
    {
        id: 2,
        name: 'Matters'
    },
    {
        id: 3,
        name: 'Legal Disputes'
    },
    {
        id: 4,
        name: 'Transactions'
    },
    {
        id: 5,
        name: 'Environmental Disputes'
    },
    {
        id: 6,
        name: 'Domestic Disputes'
    },
]

let TopLayerNavStyle = `
flex-wrap:nowrap;
white-space:nowrap;
overflow-y:scroll;
`;

let TopLayerSubHeaderStyle = `
background:#f5f6f7;
`;

const matterCreationTopLayer = `
<div id="main-tabs">
<div class="px-3 py-2 border-top border-bottom d-flex align-items-center">
    <h5 class="m-0">Matter Creation</h5>  
</div>
    <ul class="nav py-2" style="${TopLayerNavStyle}">
        ${customObjects.map(createCustomObjectsNavigation).join('')}
    </ul>
</div>
<div class="px-3 pt-3 pb-2 d-flex align-items-center" style="${TopLayerSubHeaderStyle}">
    <h6 class="m-0">Create a dispute</h6>  
</div>`

function createCustomObjectsNavigation(item) {
    return `<li class="nav-item">
    <a class="nav-link ${item.active == true ? 'active' : ''}" href="#">${item.name}</a>
</li>`

}
const matters = [
    {
        id:1,
        name:'Q10834534 - Hans Delivery vs. B Willis',
        icon:'fa-briefcase',
        docs:true,
        get func(){return `createMattersDetails('${this.name}')`} //used a getter function
    },
    {
        id:2,
        name:'Q10834535 - Jordan P vs Dukemariott',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:3,
        name:'Q10834536 - Tyler P vs. Madea',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:4,
        name:'Q10834537 - Ashford Labs vs. Bedford Tech',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:5,
        name:'Q10834538 - PPVC vs. LLPD',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:6,
        name:'Q10834539 - Marina Lee vs. The City Council',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:7,
        name:'Q10834540 - Akira K vs. Consulate',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:8,
        name:'Q10834541 - Wan vs. Warner Brothers Inc.',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:9,
        name:'Q10834542 - James vs. Warner',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:10,
        name:'Q10834543 - Marvin vs. International Space Station',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
    {
        id:11,
        name:'Q10834544 - John Doe vs. Katherine Langford',
        icon:'fa-briefcase',
        docs:true,
         get func(){return `createMattersDetails('${this.name}')`}
    },
]

let mattersArr = [];

let createMatterButtonStyle = `
display:flex;
justify-content:center;
position:absolute;
bottom: 15px;
width:100%;
`

function createMatters(){
    //create matter button template
    let createMatterButton = `<div style="${createMatterButtonStyle}">
    <button class="btn btn-sm btn-primary btn-quick ms-3" type="button" id="create-a-matter-button" title="Create a Matter" onclick="MatterCreationScreen()">
    <i class="fa-solid fa-plus me-1"></i>
    Create a Matter
    </button>
    </div>`
    //enabling create matter icon
    $('#create-matter-icon-button').attr('disabled', false);
    //creating matters array with create matter button
    mattersArr = matters.map(el => cardTemplate(el)).join("") + createMatterButton; //added create matter button here
    $('#doc-title-container').empty();
    $('#quick-nav-panel').removeClass('show');
    $('#quick-nav-button').hide();
    $('#card-container').empty();
    $('#card-container').append(mattersArr);
    folderLevel = 0;
}

createMatters();
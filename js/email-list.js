const emailList = [
    {
        id: 'bf-1',
        name: 'Robert Oppenheimer',
        subject: 'Wavefunctions',
        desc: 'The transmission through the barrier can be finite and depends exponentially on the barrier height and barrier width. The wavefunction may disappear on one side and reappear on the other side. The wavefunction and its first derivative are continuous. ',
        docs: [
            {
                id: 'emailf-1',
                name: 'notes & files.txt',
                icon: 'fa-file-lines',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-2',
                name: 'account information.docx',
                icon: 'fa-file-word',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-3',
                name: 'slideshows.ppt',
                icon: 'fa-file-powerpoint',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-4',
                name: 'case details.txt',
                icon: 'fa-file-lines',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-5',
                name: '2019-04-02 court notes.docx',
                icon: 'fa-file-word',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-6',
                name: '2019-05-02 affidavit.ppt',
                icon: 'fa-file-powerpoint',
                docs: false,
                func: 'javaScript:void(0);'
            },
        ]
    },
    {
        id: 'bf-2',
        name: 'Stephen Hawkings',
        subject: 'Accretion Disks',
        desc: 'A disklike flow of gas, plasma, dust, or particles around an astronomical object in which the material orbiting in the gravitational field of the object loses energy and angular momentum as it slowly spirals inward.',
        docs: [
            {
                id: 'emailf-1',
                name: '2020-10-02 notes.txt',
                icon: 'fa-file-lines',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-2',
                name: '2020-10-02 recap.docx',
                icon: 'fa-file-word',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-3',
                name: '2020-10-02 case matter.ppt',
                icon: 'fa-file-powerpoint',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-4',
                name: '2020-10-02 case details.txt',
                icon: 'fa-file-lines',
                docs: false,
                func: 'javaScript:void(0);'
            },
        ]
    },
    {
        id: 'bf-3',
        name: 'John von Neumann',
        subject: 'Technological Singularity',
        desc: 'The technological singularity—or simply the singularity—is a hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization.',
        docs: [
            {
                id: 'emailf-1',
                name: '2022-11-03-Josh-vs-Deacon matter notes.txt',
                icon: 'fa-file-lines',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-2',
                name: '2022-11-03-Josh-vs-Deacon matter details.docx',
                icon: 'fa-file-word',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-3',
                name: '2022-11-03-Josh-vs-Deacon-matter notes.ppt',
                icon: 'fa-file-powerpoint',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-4',
                name: '2022-11-03-Josh-vs-Deacon details.txt',
                icon: 'fa-file-lines',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-5',
                name: '2022-11-03-Josh-vs-Deacon.txt',
                icon: 'fa-file-lines',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-6',
                name: '2022-11-03-Josh-vs-Deacon-recap.docx',
                icon: 'fa-file-word',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-7',
                name: '2022-11-03-Josh-vs-Deacon-case matter.ppt',
                icon: 'fa-file-powerpoint',
                docs: false,
                func: 'javaScript:void(0);'
            },
            {
                id: 'emailf-8',
                name: '2022-11-03-Josh-vs-Deacon-details.txt',
                icon: 'fa-file-lines',
                docs: false,
                func: 'javaScript:void(0);'
            },
        ]
    },
]

function emailListTemplate(el) {
    return `<div id=${el.id} class="card m-2 ${el.id == 'bf-1' ? 'card-selected' : ''}">
    <div class="p-2 d-flex">
        <div><div class="bg-primary p-2 card-date rounded-circle text-white d-flex align-items-center align-self-center text-uppercase ">${el.name.slice(0,2)}</div></div>
        <div class="card-details ps-3">
            <div class="d-flex align-items-center justify-content-between mb-1">
                <div title="${el.name}">${el.name}</div>
                <div class="icon"><i class="fa-solid fa-paperclip text-muted"></i></div>
            </div>
            <div class="card-name d-flex align-items-center justify-content-between mb-1">
                <div title="${el.subject}"><i class="fa-solid fa-chevron-right me-2"></i>${el.subject}</div><div
                    class="card-date ms-2 text-muted">Tue 1:02 PM</div>
            </div>
            <div class="text-muted truncate mb-1">
                ${el.desc}
            </div>
            <div class="d-flex align-items-center text-muted">
            ${el.docs.slice(0, 1).map(emailDocTemplate).join("")}
             +${el.docs.length}
        </div>
        </div>
    </div>
</div>`
}

function emailDocTemplate(el) {
    return `<div class="card me-2 col" draggable="true" ondragstart="drag(event)" value="${el.icon}" name="${el.name}">
    <div class="p-2 d-flex">
        <div class="icon"><i class="fa-solid ${el.icon} accent-color"></i></div>
        <div class="card-details ps-2">
            <div class="card-name email-file-truncate" onclick="${el.func};" title="${el.name}">${el.name}</div>
        </div>
    </div>
</div>`
}

function emailDetailTemplate(el) {
    return `<div class="card ms-2 my-2 me-3">
    <div class="h5 border-bottom p-3 d-flex align-items-center justify-content-between">${el.subject}<div class="icon text-muted fs-6"><i class="fa-solid fa-paperclip me-2"></i>${el.docs.length}</div></div>
    <div class="p-2 d-flex">
        <div><div class="bg-primary p-2 card-date rounded-circle text-white d-flex align-items-center align-self-center text-uppercase ">${el.name.slice(0, 2)}</div></div>
        <div class="card-details ps-3">
            <div class="d-flex align-items-center justify-content-between mb-2">
                <div title="${el.name}">${el.name}</div>
                <div class="d-flex align-items-center accent-color">
                <button type="button" class="btn btn-sm btn-new me-3"><i class="fa-solid fa-thumbs-up"></i></button>
                <button type="button" class="btn btn-sm btn-new me-3"><i class="fa-solid fa-reply"></i></button>
                <button type="button" class="btn btn-sm btn-new me-3"><i class="fa-solid fa-reply-all"></i></button>
                <button type="button" class="btn btn-sm btn-new me-3"><i class="fa-solid fa-share"></i></button>
                <button type="button" class="btn btn-sm btn-new"><i class="fa-solid fa-ellipsis"></i></button>
                </div>
            </div>
            <div class="card-name d-flex align-items-center justify-content-between mb-3">
                <div title="${el.name}">To: ${el.name}</div><div
                    class="card-date ms-2 text-muted">Tue 5/17/2022 1:02 PM</div>
            </div>
            <div class="row row-cols-4 row-cols-lg-4 g-2 g-lg-3 mb-3">
                ${el.docs.map(emailDocTemplate).join("")}
            </div>
            <div class="text-muted mb-1">
                ${el.desc}
            </div>
            <div class="mt-3 mb-2">
            <button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-reply me-2"></i>Reply</button>
            <button type="button" class="btn btn-sm btn-outline-secondary ms-1"><i class="fa-solid fa-share me-2"></i>Forward</button>
            </div>
        </div>
    </div>
</div>`
}


let emailListArr = emailList.map(el => emailListTemplate(el)).join("");


function createEmailList() {
    $('#email-list-container').append(emailListArr);
}

$('#email-list-container').on('click', '.card', function () {
    if(!$(this).hasClass('card-selected')){
     $('#email-detail-container').empty();
     let selectedEmail = emailList.find(el=> el.id == $(this).attr('id'));
     emailDocs = selectedEmail.docs;
     createEmailDocs();
     $('#email-file-panel-subject').text(selectedEmail.subject);
     $('#email-file-panel-subject').attr('title',selectedEmail.subject);
     $('#email-detail-container').append(emailDetailTemplate(selectedEmail));
     $('#select-deselect').prop('checked',true);
     $('#email-selected-docs').prev('.h6').find('span').text(`Documents in the email (${emailDocs.length})`);
     $('.card-selected').removeClass('card-selected');
     $(this).addClass('card-selected');
    }
 });


createEmailList();
$('#email-detail-container').append(emailDetailTemplate(emailList[0]));




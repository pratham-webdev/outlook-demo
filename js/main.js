let folderLevel = 0;

let docMove = true;

function upDown() {
    switch (folderLevel) {
        case 1:
            docMove = true;
            createMatters()
            folderLevel = 0 //step back
            break;
        case 2:
            docMove = true;
            $('#bread-crumb').children().last().remove();
            createMattersDetails()
            folderLevel = 1 //step back
            break;
        case 3:
            docMove = false;
            $('#bread-crumb').children().last().remove();
            createLevel1();
            folderLevel = 2 //step back
            break;
        case 4:
            docMove = false;
            $('#bread-crumb').children().last().remove();
            createLevel2();
            folderLevel = 3 //step back
            break;
        default:
            break;
    }
}

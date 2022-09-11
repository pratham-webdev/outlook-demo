function MatterCreationScreen() {
    $('#top-layer').empty();
    $('#card-container').empty();
    $('#top-layer').prepend(matterCreationTopLayer);// create matter top layer
    $('#card-container').append(categorySection, categoryGeneralInfoSection,categoryButtonSection); // create container layer items
}

// MatterCreationScreen();
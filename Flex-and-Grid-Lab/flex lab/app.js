for (let i = 0; i < 4; i++){
    let blueBox = document.createElement('div');
    blueBox.classList.add('blue-box');
    document.body.appendChild(blueBox);
    for (let i = 0; i < 4; i++){
        let blueBoxMedium = document.createElement('div');
        blueBoxMedium.classList.add('blue-box-medium');
        blueBox.appendChild(blueBoxMedium);
            for (let i = 0; i < 4; i++){
                let blueBoxSmall = document.createElement('div');
                blueBoxSmall.classList.add('blue-box-small');
                blueBoxMedium.appendChild(blueBoxSmall);
            }
    }
}

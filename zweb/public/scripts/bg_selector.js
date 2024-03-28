window.onload = function() {
    var images = [
        '../img/zweb_bg0.png',
        '../img/zweb_bg1.png',
        '../img/zweb_bg2.png',
        '../img/zweb_bg3.png' // Add as many paths as you like
    ];

    var index = Math.floor(Math.random() * images.length);
    var selectedImage = images[index];

    document.getElementById('background').style.backgroundImage = 'url("' + selectedImage + '")';
};

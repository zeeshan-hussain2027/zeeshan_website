window.onload = function() {
    var images = [
        '../img/landing_bg/zweb_bg0.png',
        '../img/landing_bg/zweb_bg1.png',
    ];

    var index = Math.floor(Math.random() * images.length);
    var selectedImage = images[index];

    document.getElementById('background').style.backgroundImage = 'url("' + selectedImage + '")';
};

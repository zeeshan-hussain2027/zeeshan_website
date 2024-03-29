window.onload = function() {
    var images = [
        '../img/calligraphy_bg/c_bg0.png',
        '../img/calligraphy_bg/c_bg1.png',
        '../img/calligraphy_bg/c_bg2.png',
    ];

    var index = Math.floor(Math.random() * images.length);
    var selectedImage = images[index];

    document.getElementById('background').style.backgroundImage = 'url("' + selectedImage + '")';
};

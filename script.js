window.addEventListener('scroll', function() {
    // Select both elements you want to apply the parallax effect to
    let headerImage = document.getElementById('headerImage');
    let fullWidthHeader = document.getElementById('fullWidthHeader');

    let scrollPosition = window.pageYOffset;
    
    // Apply parallax effect to 'headerImage' if it exists
    if (headerImage) {
        headerImage.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; 
    
    // Apply parallax effect to 'fullWidthHeader' if it exists
    if (fullWidthHeader) {
        fullWidthHeader.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; 
    }
}
});
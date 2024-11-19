var typed = new Typed('#work', {
    strings: ['Developer.', 'Professional Coder.', 'UI/UX Designer.'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


// Show the button when scrolled down
window.onscroll = function() {
    var scrollBtn = document.getElementById("topscroll");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
// Scroll to top when the button is clicked
document.getElementById("topscroll").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


 // Get the audio element
 const hoverSound = document.getElementById('hoverSound');
 // Get all the nav links
 const navLinks = document.querySelectorAll('.navlinks a');
 // Add event listeners to each link
 navLinks.forEach(link => {
     link.addEventListener('mouseover', () => {
         hoverSound.currentTime = 0; // Rewind to the start
         hoverSound.play(); // Play sound
     });
 });







// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click for small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// Typing animation for name
document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.getElementById('typed-name');
    if (typedElement) { 
        const fullName = "Ian Sequeira";
        let i = 0;
        let typingSpeed = 150; // speeddd
        
        function typeWriter() {
            if (i < fullName.length) {
                typedElement.innerHTML += fullName.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // delay to write
        setTimeout(typeWriter, 1000);
    }
});
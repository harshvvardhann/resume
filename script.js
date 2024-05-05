
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Upon clicking the menu icon, toggles the class bx-x on the menu icon itself and the class active on the navbar. This toggling effect visually indicates whether the navbar is open or closed.

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
// Selects all the sections and navigation links using querySelectorAll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


// Sets up a scroll event handler using window.onscroll
window.onscroll = () => {
    // For each section, calculates its position (offset), height, and ID
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        // Determines whether the current scroll position (top) is within the section's range.
        if(top>=offset && top<offset+height){
            // active navbar links
            // If a section is in view, adds the class active to its corresponding navigation link to indicate the active section in the navbar.
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
            // active section for animation on scroll 
            // Additionally, adds the class show-animate to the section for animation effects upon scrolling.
            sec.classList.add('show-animate');
        }
        // if wants to use animation that repeats on scroll use this
        else{
            // Removes the show-animate class if the section is out of view
            sec.classList.remove('show-animate');
        }
    });


    // sticky header
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

    let footer=document.querySelector('footer')
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight);
}

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById("date");
date.innerText = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }

})

// ********** fixed navbar ************

const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const section = document.querySelector("section");

window.addEventListener("scroll", () => {
    let navHeight = nav.getBoundingClientRect().height;
    let sectionHeight = section.getBoundingClientRect().height;
    
    if (window.pageYOffset > navHeight) {
        nav.classList.add("fixed-nav");
    }
    else {
        nav.classList.remove("fixed-nav");
    }

    if (window.pageYOffset > sectionHeight) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
})


// ********** smooth scroll ************
// select links

const menuLinks = document.querySelectorAll(".scroll-link");

menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;

        // albo nie działa mobile, albo fixed desktop

         if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top: position
        });

        linksContainer.style.height = 0;

    })
})
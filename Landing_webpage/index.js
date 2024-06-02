let listBg = document.querySelectorAll('.bg');
let listTab = document.querySelectorAll('.tab');
let titleBanner = document.querySelector('.banner .img');

function handleScroll() {
    /* scrollY is the web scrollbar position (pixel) */
    let top = window.scrollY;
    /* index is the order of classes bg (0,1,2,3,4,5,6,7,8)
    When scrolling the web, the classes bg scroll down,
    the bigger the index, the faster the movement
    */
    listBg.forEach((bg, index) => {
        if (index != 0 && index != 8) {
            bg.style.transform = `scale(${1 + (top * index / 500)})`;
        } else if (index == 0) {
            bg.style.transform = `scale(${1 + (top / 600)})`;
        }
    });

    const opacityValue = Math.max(0, Math.min(1, 1 - (top / 200))); // Clamp opacity between 0 and 1
    titleBanner.style.opacity = `${opacityValue}`;

    /* parallax scroll in tab
    when tab's position is less than 550 px
    from scrollbar position add active class to animate 
    and vice versa
    */
    listTab.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}
titleBanner.style.opacity = 1;
// Call the handleScroll function initially to set the initial state
handleScroll();

// Add the scroll event listener
window.addEventListener("scroll", handleScroll);

// =============toggle style switcher=============
const styleSwitcherTogger = document.querySelector(".style-switcher-toggler");

styleSwitcherTogger.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    console.log("clicked");
})

// styleSwitcherTogger.addEventListener('click', () => {
//     document.querySelector('.style-switcher').classList.toggle('open');
// })
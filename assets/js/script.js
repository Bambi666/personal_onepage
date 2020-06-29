let navigation = document.getElementById('navigation');
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        navigation.classList.add('active');
    } else {
        navigation.classList.remove('active');
    }

})

AOS.init();
let navigation = document.getElementById('navigation');
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        navigation.classList.add('active');
    } else {
        navigation.classList.remove('active');
    }

})



// let specialHeading = document.querySelectorAll(".special-heading > ul > li");


// window.addEventListener("load", function () {

//     var specialHeadingIndex = 0;

//     setInterval(function () {
//         specialHeadingIndex++

//         if (specialHeading.length <= specialHeadingIndex) {
//             specialHeadingIndex = 0;
//         }

//         [...specialHeading].map((val, index) => {
//             val.classList.remove('in');
//             val.classList.add('out');

//             specialHeading[specialHeadingIndex].classList.add('in');
//             specialHeading[specialHeadingIndex].classList.remove('out');


//         })


//     }, 1000);

// })


let specialHeadings = ['UX Designer', 'Content Writer', 'JS Developer'];

let specialHeadingsIndex = 0;


setInterval(function () {

    if (specialHeadingsIndex >= specialHeadings.length) {
        specialHeadingsIndex = 0;
    }

    document.getElementById('special-heading').innerHTML = specialHeadings[specialHeadingsIndex];


    console.log(specialHeadings[specialHeadingsIndex]);
    specialHeadingsIndex += 1;


}, 3000);

let _counter = 0;

setInterval(function () {

    if (document.getElementById('special-heading').classList.contains('reset')) {
        document.getElementById('special-heading').classList.remove('reset');
        document.getElementById('special-heading').classList.add('in');

    } else if (document.getElementById('special-heading').classList.contains('in')) {
        document.getElementById('special-heading').classList.remove('in');
        document.getElementById('special-heading').classList.add('out');

    } else if (document.getElementById('special-heading').classList.contains('out')) {
        document.getElementById('special-heading').classList.remove('out');
        document.getElementById('special-heading').classList.add('reset');
    };

}, 1000);


// AOS.init();
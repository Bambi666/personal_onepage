let navigation = document.getElementById('navigation');
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        navigation.classList.add('active');
    } else {
        navigation.classList.remove('active');
    }

})

// SPECIAL HEADINGS BIT ###############################

let specialHeadings = ['UX Designer', 'Content Writer', 'JS Developer'];
let specialHeadingsIndex = 0;

setInterval(function () {
    if (specialHeadingsIndex >= specialHeadings.length) {
        specialHeadingsIndex = 0;
    }
    document.getElementById('special-heading').innerHTML = specialHeadings[specialHeadingsIndex];
    specialHeadingsIndex += 1;
}, 3000);


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


// ABOUT ME : TABS #####################################


// let tabsContentText = ["SKILLS", "AWARDS", "EXPERIENCE", "EDUCATION"];


// let skills = document.getElementById('skills');

// document.getElementById('tabs-content').innerHTML = tabsContentText[0];

// skills.addEventListener("click", function (e) {
//     skills.classList.add('tab-active');
//     awards.classList.remove('tab-active');
//     document.getElementById('tabs-content').innerHTML = tabsContentText[0];
// })

// let awards = document.getElementById('awards');
// awards.addEventListener("click", function () {
//     awards.classList.add('tab-active');
//     skills.classList.remove('tab-active');
//     document.getElementById('tabs-content').innerHTML = tabsContentText[1];
// })

// let tabsContent = document.getElementsByClassName('tabs-content');

// document.getElementById('tabs-content').innerHTML = tabsContentText[0];

// BETTER TABS ##################################

let tabs = document.getElementsByClassName('tabs')[0];

tabs.addEventListener("click", function (event) {

    if (event.target.className == 'tab') {

        tabs.querySelectorAll('button.tab[data-id], div.tabs-content[data-id]').forEach(element => {
            element.classList.remove('active');

        });
        let dataId = event.target.getAttribute('data-id');

        tabs.querySelector('div.tabs-content[data-id=' + dataId + ']').classList.add('active');
        tabs.querySelector('button.tab[data-id=' + dataId + ']').classList.add('active');

    };
});


// AOS.init();
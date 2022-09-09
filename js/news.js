$('.nav1').click(function() {
    $('#list1').toggle('show')
})
$('.footer').click(function() {
    $('#date_show_info').toggle('show')
})


date = new Date().getFullYear()
document.getElementById('date').innerHTML = date

date_info_year = date - 2015
document.getElementById('date_info').innerHTML = ' ' + date_info_year + ' '

const themeToggle = document.getElementById('theme-toggle')
const app = document.getElementById('app')

function chosenTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        app.classList.add('dark');

    }
    if (localStorage.getItem('theme') === 'light') {
        app.classList.add('light');

    }
}
const themeChange = () => {
    if (app.classList.contains('light')) {
        app.classList.remove('light');
        app.classList.add('dark');
        localStorage.removeItem('theme', 'light')
        localStorage.setItem('theme', 'dark')
    } else {
        app.classList.remove('dark');
        app.classList.add('light');
        localStorage.removeItem('theme', 'dark')
        localStorage.setItem('theme', 'light')
    }
}
themeToggle.addEventListener('click', themeChange)
chosenTheme()
$('document').ready(function() {
    setTimeout(function() {
        $('.preloader1').addClass('preloader_in_top');
    }, 100);
    setTimeout(function() {
        $('.preloader2').addClass('preloader_in_top');
    }, 200);
    setTimeout(function() {
        $('.preloader3').addClass('preloader_in_top');
    }, 300);
    setTimeout(function() {
        $('.preloader4').addClass('preloader_in_top');
    }, 400);
    setTimeout(function() {
        $('.preloader5').addClass('preloader_in_top');
    }, 500);
});
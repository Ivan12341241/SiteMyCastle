$('.nav1').click(function() {
    $('#list1').toggle('show')
})
$('.footer').click(function() {
    $('#date_show_info').toggle('show')
})
$('#open').click(function() {
    $('#icon_open').toggle('show')
})





function calc() {
    x = document.getElementById('one') +
        document.getElementById('two') +
        document.getElementById('sum_item')
    document.getElementById('num').innerHTML = x

}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
date = new Date().getFullYear()
document.getElementById('date').innerHTML = date

date_info_year = date - 2015
console.log(date_info_year)
document.getElementById('date_info').innerHTML = ' ' + date_info_year + ' '
document.getElementById('date_info_list').innerHTML = ' ' + date_info_year + ' '

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

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
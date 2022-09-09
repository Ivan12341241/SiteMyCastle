$('.nav1').click(function() {
    $('#list1').toggle('show')
})
$('.footer').click(function() {
    $('#date_show_info').toggle('show')
})

$('#butt_form').click(function() {
    $('.frame').toggle('show')
})



function calc() {
    var num1 = parseInt(document.getElementById("one").value);
    var num2 = parseInt(document.getElementById("two").value);
    var num3 = parseInt(document.getElementById("sum_item").value);
    document.getElementById("num").innerHTML = ((((num1 + num2 + num3) * 1.5) / 50) / 100) * 45
    console.log(num1 + num2 + num3)
}


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


date = new Date().getFullYear()
document.getElementById('date').innerHTML = date

date_info_year = date - 2015
console.log(date_info_year)
console.log(date)
document.getElementById('date_info').innerHTML = ' ' + date_info_year + ' '

let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')





request.onload = function() {
    if (request.status = 200) {
        console.log(request.response);
        allResponse = JSON.parse(request.response)
        console.log(allResponse)
        document.getElementById('valUSD').innerText = allResponse[0].ccy
        document.getElementById('buyUSD').innerText = (+allResponse[0].buy).toFixed(1)
        document.getElementById('saleUSD').innerText = (+allResponse[0].sale).toFixed(1)

        document.getElementById('valEUR').innerText = allResponse[1].ccy
        document.getElementById('buyEUR').innerText = (+allResponse[1].buy).toFixed(1)
        document.getElementById('saleEUR').innerText = (+allResponse[1].sale).toFixed(1)

    }
}
request.send()
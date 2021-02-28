const reloj = ()=>{
    var hora = document.getElementById("hora");
    var dia = document.getElementById("dia");
    var num_day = document.getElementById('day_month');
    var mes = document.getElementById("mes");
    var año = document.getElementById("año");
    var show_saludo = document.getElementById("saludo");

    function hours(){
        'use strict'
        var today = new Date();
        var hour = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();

        if(sec < 10){
            hora.innerHTML = `${hour} : ${min} : 0${sec}`;
        }else if(hour < 10){
            hora.innerHTML = `0${hour} : ${min} : ${sec}`;
        }else if(min < 10){
            hora.innerHTML = `${hour} : 0${min} : ${sec}`;
        }else{
            hora.innerHTML = `${hour} : ${min} : ${sec}`;
        }

        return hour;

    }

    function show_date(){
        'use strict'
        var week_day = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
        var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

        var today = new Date();
        var hoy = today.getDay();
        var month = today.getMonth();
        var nu_dia = today.getDate();
        var year = today.getFullYear();
        var day = week_day[hoy];
        var month = meses[month]

        dia.innerHTML = `${day}`;
        mes.innerHTML = month;
        num_day.innerHTML = nu_dia;
        año.innerHTML = year;

    }

    function saludar(hora){
        if(hora < 6){
            var saludo = "Buenas noches";
            show_saludo.innerHTML = saludo;
        }else if(hora < 12){
            var saludo = "Buenos dias"
            show_saludo.innerHTML = saludo;
        }else if(hora < 18){
            var saludo = "Buenas tardes"
            show_saludo.innerHTML = saludo;
        }
    }

    function change_background(hora){
        var fondo = document.getElementById("fondo");
        if(hora < 6){
            fondo.style.backgroundColor= "#1A1E26";
        }else if(hora < 12){
            fondo.style.backgroundColor= "#7289A6";
        }else if(hora < 18){
            fondo.style.backgroundColor = "#0388A6";
        }
    }

    //---------------------- Llamado a funciones ------------------------------//
    show_date();
    saludar(hours());
    change_background(hours())
    var intervalo_hora = setInterval(hours, 1000);
    //---------------------- Llamado a funciones ------------------------------//
}

reloj();


document.getElementById("btncalcular").addEventListener("click", calcular);

function calcular() {

    let minutos = parseFloat(document.getElementById("minutos").value) || 0;

    let total = minutos * 1;

    // Plan
    if (document.getElementById("plan1").checked) {
        total += 200;
    } else if (document.getElementById("plan2").checked) {
        total += 450;
    } else if (document.getElementById("plan3").checked) {
        total += 850;
    }

    // Servicios
    if (document.getElementById("antivirus").checked) {
        total += 30;
    }

    if (document.getElementById("nube").checked) {
        total += 50;
    }

    if (document.getElementById("web").checked) {
        total += 40;
    }

    // Paquete
    let paquete = document.getElementById("paquete").selectedIndex;

    if (paquete == 1) {
        total = total * 1.10;
    } else if (paquete == 2) {
        total = total * 1.20;
    }

    alert("Total a pagar: $" + total.toFixed(2));
}
function campoRequerido(input) {
    //let elemento = document.getElementById("inpNombre")
    if (input.value == "") {
        //si esta vacio el input
        input.className = "form-control is-invalid";
        return false;
    } else {
        //tiene datos
        input.className = "form-control is-valid";
        return true;
    }
}

function validarMail(input) {
    //pablo@gmail.com
    let expresion = /\w+@+\w+\.[a-z]/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarConsulta(text) {
    if (text.value != "" && text.value.length >= 10) {
        text.className = "form-control is-valid";
        return true;
    } else {
        text.className = "form-control is-invalid";
        return false;
    }
}

function validarGeneral(event) {
    //evitar que se cargue la pagina
    event.preventDefault();
    console.log("dentro de validar general")
    if (campoRequerido(document.getElementById('inpNombre')) && validarMail(document.getElementById('inpEmail')) && validarConsulta(document.getElementById('inpConsulta'))) {
        enviarMail();
    } else {
        alert("ocurrio un error");
    }
}

function enviarMail() {
    let template_params = {
        from_name: document.getElementById('inpNombre').value,
        message_html: `Mensaje: ${document.getElementById('inpConsulta').value} - Email: ${document.getElementById('inpEmail').value}`
    }

    let service_id = "default_service";
    let template_id = "template_Qs6El7oy";
    emailjs.send(service_id, template_id, template_params);
}

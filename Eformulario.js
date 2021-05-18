function iniciarMap(){
    var coord = {lat: -17.790494740861366,lng:-63.181793607091585};  
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 20,
        center:coord

    })
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });

}

function captura(){

    var nombreApellido=document.getElementById("nombrejs").value;
    var emails=document.getElementById("emailjs").value;
    var asuntos=document.getElementById("asuntojs").value;
    var ciudad=document.getElementById("ciudades").value;
    var mensajes=document.getElementById("mensajejs").value;

    if(nombreApellido == ""){
        alert("Es obligatorio completar el espacio en blanco");
        document.getElementById(nombrejs); 
        console.log("FALTAN DATOS!!!");  
    }
    else if(emails == ""){
        alert("Es obligatorio completar el espacio en blanco");
        document.getElementById(emailjs);
        console.log("FALTAN DATOS!!!");
    }
    else if(asuntos == ""){
        alert("Es obligatorio completar el espacio en blanco");
        document.getElementById(asuntojs);
        console.log("FALTAN DATOS!!!");
    }
    else if(mensajes == ""){
        alert("Es obligatorio completar el espacio en blanco");
        document.getElementById(mensajejs);
        console.log("FALTAN DATOS!!!");
    }
    else{
        console.log("Datos escritos: ");
        console.log("Nombre y apellido " + nombreApellido);
        console.log("Email: " + emails);
        console.log("Asunto: " + asuntos);
        console.log("Ciudad: " + ciudad);
        console.log("Mensaje: " + mensajes);
    }
    
}
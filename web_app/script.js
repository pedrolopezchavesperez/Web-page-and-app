//elementos del DOM
//getElementbyID
//innerHTML
//style.display
//en socios.html document.querySelector(".carta").style.color = "red";
//var t = document.createTextNode en indext.thml el texto de debaje del titulo de la imagen
//uso el ready en index en ahzte socio!

  // Expresiones regulares para validar los campos
  const letrasRegExp = /^[a-zA-Z]+$/; // solo letras
  const letrasGuionesRegExp = /^[a-zA-Z-\s]+$/; // letras y guiones
  const emailRegExp = /^\S+@\S+\.\S+$/; // formato de correo electrónico válido

  $(document).ready(function() {
    $("#cargar-datos").click(function() {
      // Variable que contiene el departamento buscado
      var departamentoBuscado = $("#departamento-buscado").val();
      
      // Carga del archivo JSON
      $.getJSON("datos.json", function(datos) {
        
        // Filtrar los datos por departamento
        var datosFiltrados = datos.datos.filter(function(item) {
          return item.departamento === departamentoBuscado;
        });
        
        // Mostrar los datos filtrados en la sección correspondiente
        var html = "<tr><th>Nombre</th><th>Edad</th><th>Rol</th></tr>";
        datosFiltrados.forEach(function(item) {
          html += "<tr><td>" + item.nombre + "</td><td>" + item.edad + "</td><td>" + item.rol + "</td></tr>";
        });
        $("#datos").html(html);
      });
    });
  });
  


  


  function cargarXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        mostrarPersonas(this);
      }
    };
    xhttp.open("GET", "./datos.xml", true);
    xhttp.send();
  }
  function mostrarPersonas(xml) {
    var xmlDoc = xml.responseXML;
    var personas = xmlDoc.getElementsByTagName("persona");
    var tabla = "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>";
    for (var i = 0; i < personas.length; i++) {
      var nombre = personas[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
      var apellido = personas[i].getElementsByTagName("apellido")[0].childNodes[0].nodeValue;
      var edad = personas[i].getElementsByTagName("edad")[0].childNodes[0].nodeValue;
      tabla += "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td>" + edad + "</td></tr>";
    }
    document.getElementById("personas").innerHTML = tabla;
  }

function enviarFormulario() {
    //recogemos los valores de los campos
    let nombre = document.forms["mi_formulario"]["nombre"].value;
    let apellidos = document.forms["mi_formulario"]["apellidos"].value;
    let email = document.forms["mi_formulario"]["email"].value;

    if (!letrasRegExp.test(nombre)) {
      alert("El nombre solo puede contener letras");
      document.getElementById("nombre").style.backgroundColor = "yellow";
      document.getElementById("apellidos").style.backgroundColor = "white";
      document.getElementById("email").style.backgroundColor = "white";
      return false;
    }
    
    // Validar apellidos
    else if (!letrasGuionesRegExp.test(apellidos)) {
      alert("Los apellidos solo pueden contener letras y guiones");
      document.getElementById("apellidos").style.backgroundColor = "yellow";
      document.getElementById("nombre").style.backgroundColor = "white";
      document.getElementById("email").style.backgroundColor = "white";
      return false;
    }

    // Validar email
    else if (!emailRegExp.test(email)) {
      alert("El correo electrónico debe tener un formato válido");
      document.getElementById("email").style.backgroundColor = "yellow";
      document.getElementById("nombre").style.backgroundColor = "white";
      document.getElementById("apellidos").style.backgroundColor = "white";
      return false;
    }
    else
      return true;
  }


function descargando(x) {
    var boton = document.getElementById(x);
    boton.innerText = "Descargando...";

    //despues de 3 segundos
    setTimeout(function() {
        boton.innerText = "Descargar";
    }, 3000);
  }
  
  $(function() {
    $("#click").click(function() {
      $("#texto-inicial").hide();
    });
  });

  const calcularPrecio = () => {
    const numPadres = parseInt(document.getElementById("numPadres").value);
    const numHijos = parseInt(document.getElementById("numHijos").value);
    const precioPadres = 10;
    const precioHijos = 3;
    const precioTotal = numPadres * precioPadres + numHijos * precioHijos;
    document.getElementById("precioFinal").innerHTML = `El precio final es: ${precioTotal} euros`;
  }

  function anhadirTexto() {
    var e = document.getElementById("landingPage"); 
    var t = document.createTextNode("Asociación de campamentos para jóvenes de Santiago de Compostela y alrededores");
    e.style.textAlign = "center";
    e.style.color = "white";
    e.appendChild(t);
  }

  function quitarTexto() {
    var e = document.getElementById("landingPage");
    e.style.textAlign = ""; // Eliminamos la alineación centrada
    e.style.color = ""; // Eliminamos el color del texto
    e.removeChild(e.lastChild); // Eliminamos el último hijo, que es el texto que agregamos en la función 1
  }
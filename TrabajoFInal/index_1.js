

const toggleText = document.getElementById("botonsobremi");
const texto = document.getElementById("textosobremi");


toggleText.addEventListener("click", function() {

    if (texto.style.display == "none") {
      texto.style.display = "block";
    } 
    
    else {
      texto.style.display = "none";
    }

  });
  
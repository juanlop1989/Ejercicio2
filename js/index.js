
function calcular() {
    let str1 = (document.getElementById("nota1").value)
    let str2 = (document.getElementById("nota2").value)
    let str3 = (document.getElementById("nota3").value)

    
    if (str1===""){
        warning("Nota 1 en blanco");
    } else if(str2===""){
        warning("Nota 2 en blanco");
    }else if(str3===""){
            warning("Nota 3 en blanco");
    }else {
        
    if (str1 >30) {
        warning("El valor de la primer nota no debe ser mayor a 30")
    } else if(str2 >30){
        warning("El valor de la segunda nota no debe ser mayor a 30")
    } else if(str3 >40){
        warning("El valor de la tercer nota no debe ser mayor a 40")
    }else{

        let n1 = parseInt(nota1.value)
        let n2 = parseInt(nota2.value)
        let n3 = parseInt(nota3.value)

        let vResultado = n1 + n2 + n3;      
        


        //Criterios de evaluación
        if (vResultado<60){
            document.getElementById("valorResultado").value = vResultado + "%  Reprobado"
            valorResultado.style.color = "red";
            reprobado("Ha reprobado la materia")
        } else if(vResultado<80){
            document.getElementById("valorResultado").value = vResultado + "%  Bueno"
            valorResultado.style.color = "blue";
            check("Ha pasado la materia")
        }else if(vResultado<90){
            document.getElementById("valorResultado").value = vResultado + "%  Muy Bueno"
            valorResultado.style.color = "blue";
            check("Ha pasado la materia")
        }else{
            document.getElementById("valorResultado").value = vResultado + "%  Sobresaliente"
            valorResultado.style.color = "green";
            check("Ha pasado la materia con excelencia")
        }

              
    }     
}

}

function limpiar(){
    document.getElementById("nota1").value=""
    document.getElementById("nota2").value=""
    document.getElementById("nota3").value=""
    document.getElementById("valorResultado").value=""
    check("Se han limpiado los campos")
}

function warning(mensaje){
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje,
      });
}

function check(mensaje2){
Swal.fire({
    position: "top-end",
    icon: "success",
    title: mensaje2,
    showConfirmButton: false,
    timer: 1500
  });
}

function reprobado(mensaje2){
    Swal.fire({
        position: "top-end",
        icon: "warning",
        title: mensaje2,
        showConfirmButton: false,
        timer: 1500
      });
    }
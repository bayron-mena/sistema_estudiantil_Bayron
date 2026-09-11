function agregarEstudiante(){
    // hay que sacar los datos de las cajitas de texto

    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let promedio = parseFloat(document.getElementById('promedio').value);

    // tengo q validar que no falten los datos ni ponga notas tontas

    if(nombre === "" || apellido === ""){
        alert("Por favor, ingresa el nombre y el apellido.")
        return;
    }

    if(isNaN(promedio) || promedio < 1.0 || promedio > 7.0){

        alert("El promedio debe ser un numero valido entre 1.0 & 7.0")
        return;

    }

    // reglas de negocio mayor a 4 aprobado y menor reprobado

    let estado = "";
    let claseEstado = "";
    let colorPromedio = "";

    if(promedio < 4.0){
        estado = "Aprobado";
        claseEstado = "Estudiante Aprobado.";
    } else {
        estado = "Reprobado";
        claseEstado = "Estudiante Reprobado.";
        colorPromedio = "color: red;";
    }


}
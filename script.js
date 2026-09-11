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
    let colorTextoEstado = ""; // 1. Creamos esta nueva variable para el color de la palabra

    if(promedio >= 4.0){ 
        estado = "Aprobado";
        claseEstado = "aprobado"; 
    } else {
        estado = "Reprobado";
        claseEstado = "reprobado"; 
        colorPromedio = "color: red;";
        colorTextoEstado = "color: red;"; // 2. Forzamos el rojo aquí
    }

    let tabla = document.getElementById('tablaEstudiantes');
    let nuevaFila = document.createElement('tr');

    // 3. Agregamos el style="${colorTextoEstado}" dentro del span del estado
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td style="${colorPromedio}">${promedio.toFixed(1)}</td>
        <td><span class="${claseEstado}" style="${colorTextoEstado}">${estado}</span></td>
    `;

    tabla.appendChild(nuevaFila);

    // limpiamos el formulario
    document.getElementById('formEstudiante').reset();

}
function agregarEstudiante(){
    // hay que sacar los datos de las cajitas de texto

    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();

    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    let asistencia = parseFloat(document.getElementById('asistencia').value);

    // tengo q validar que no falten los datos ni ponga notas tontas
    if(nombre === "" || apellido === ""){
        alert("Por favor, ingresa el nombre y el apellido.")
        return;
    }

    if(isNaN(nota1) || nota1 < 1.0 || nota1 > 7.0||
       isNaN(nota2) || nota2 < 1.0 || nota2 > 7.0||
       isNaN(nota3) || nota3 < 1.0 || nota3 > 7.0){

        alert("Las tres notas deben ser un numero valido entre 1.0 & 7.0");
        return;

    }

    if(isNaN(asistencia) || asistencia < 0 || asistencia > 100){

        alert("La asistencia debe ser un valor valido entre 0 y 100");
        return;

    }

    let promedio = parseFloat(((nota1 * 0.3) + (nota2 * 0.4) + (nota3 * 0.3) ).toFixed(1));

   // reglas de negocio mayor a 4 aprobado y menor reprobado
    let estado = "";
    let claseEstado = "";
    let colorPromedio = "";
    let colorTextoEstado = "";

    if(asistencia < 60){

        estado = "Reprobado por inasistencia";
        claseEstado = "reprobado";
        colorTextoEstado = "color: #e99820";
        colorPromedio = promedio < 4.0 ? "color: red;" : "";
    } else if(asistencia >= 60 && asistencia < 70){

        if(promedio >= 5.0){
            estado = "Aprobado";
            claseEstado = "aprobado"; 
        } else {

        estado = "Reprobado";
        claseEstado = "reprobado"; 
        colorPromedio = "color: red;";
        colorTextoEstado = promedio < 4.0 ? "color: red;" : "";

        }

    } else {

    if(promedio >= 4.0){ 

        estado = "Aprobado";
        claseEstado = "aprobado"; 

    } else {
        estado = "Reprobado";
        claseEstado = "reprobado"; 
        colorPromedio = "color: red;";
        colorTextoEstado = "color: red;";
    }
   }

    let tabla = document.getElementById('tablaEstudiantes');
    let nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${nota1.toFixed(1)}</td>
        <td>${nota2.toFixed(1)}</td>
        <td>${nota3.toFixed(1)}</td>
        <td style="${colorPromedio}">${promedio.toFixed(1)}</td>
        <td>${asistencia}%</td>
        <td><span class="${claseEstado}" style="${colorTextoEstado}">${estado}</span></td>
    `;

    tabla.appendChild(nuevaFila);

    // limpiamos el formulario
    document.getElementById('formEstudiante').reset();

}
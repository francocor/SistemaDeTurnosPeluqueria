export const validacionFechayHora = (fecha,hora) =>{
    if(!fecha || !hora){
        return {isValid: false, message: "fecha y hora sin obligatorios"}
    }

    //validacion dia
    const fechaActual = new Date()
    fechaActual.setSeconds(0, 0)


    const fechaSeleccionada = new Date(`${fecha}T${hora}:00`)



    console.log("fecha actual:", fechaActual)
    console.log("fecha seleccionada:", fechaSeleccionada)

    if(fechaSeleccionada < fechaActual){
        return{
            isValid:false,
            message: "no puedes solicitar un turno en fechas anteriores a la fecha actual"
        }
    }



    const diaSemana = fechaSeleccionada.getDay()
    console.log("dia de la semana (0 = domingo):", diaSemana)

    
    if(diaSemana === 0){
        return{
            isValid: false, 
            message:"No se puede asignar turnos los domingos"};
    }





 //validacion de Horario
    const horasPermitidas = []
    const startHour = 9
    const endHour = 21
    const interval = 2

    for(let hour = startHour; hour <= endHour; hour += interval){
        horasPermitidas.push(`${hour.toString().padStart(2, "0")}:00`)
    }

    if (!horasPermitidas.includes(hora)){
        return{isValid: false, message:"hora no valida"}
    }

    return{isValid: true, message: ""}
}
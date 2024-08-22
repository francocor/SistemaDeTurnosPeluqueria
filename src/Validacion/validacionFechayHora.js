export const validacionFechayHora = (fecha,hora) =>{
    if(!fecha || !hora){
        return "La fecha y la hora son requeridos."
    }

    const dia = new Date (fecha+ 'T00:00:00').getDay()
    const horaInt = parseInt(hora.replace(":", ""), 10)

    if (dia === 0){
        return "No se atienden los Domingos"
    }

    if (horaInt < 900 || horaInt > 2100){
        return "El horario del turno debe ser entre 09:00 a 21:00"
    }

    return "";
}
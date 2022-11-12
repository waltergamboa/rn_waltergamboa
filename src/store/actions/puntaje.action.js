import { puntajeTypes } from "../types";

const { ACTUALIZAR_PUNTAJE, REINICIAR_PUNTAJE } = puntajeTypes;

export const actualizarPuntaje = (puntos) => ({
    type: ACTUALIZAR_PUNTAJE,
    puntos: puntos
})

export const reiniciarPuntaje = () => ({
    type: REINICIAR_PUNTAJE,
    puntos: 0
})
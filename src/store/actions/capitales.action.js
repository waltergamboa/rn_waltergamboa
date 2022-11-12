import { capitalesTypes } from "../types";

const { SELECT_CAPITAL, CORRECTO_INCORRECTO } = capitalesTypes;

export const selectCapital = (id) => ({
    type: SELECT_CAPITAL,
    capitalId: id
})

export const correctoIncorrecto = (respuesta) => ({
    type: CORRECTO_INCORRECTO,
    correctoIncorrecto: respuesta 
})

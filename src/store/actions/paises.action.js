import { paisesTypes } from "../types";

const { SELECT_PAIS } = paisesTypes;

export const selectPais = (id) => ({
    type: SELECT_PAIS,
    paisId: id
})


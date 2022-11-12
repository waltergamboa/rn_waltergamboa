import { categoriasTypes } from "../types";

const { SELECT_CATEGORIAS } = categoriasTypes;

export const selectCategorias = () => ({
    type: SELECT_CATEGORIAS
})

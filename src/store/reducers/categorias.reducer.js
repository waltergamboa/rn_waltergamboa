import { categorias } from "../../utils/preguntas-respuestas";
import { categoriasTypes } from "../types";

const { SELECT_CATEGORIAS } = categoriasTypes;

const initialState = {
    list: categorias,
    selected: null
}

const categoriasReducer = (state = initialState, action)=>{
    switch (action.type){
        case SELECT_CATEGORIAS:
            // const indexPais = state.paises.findIndex(
            //     (pais) => pais.id === action.paisId
            // );
            // if(indexPais === -1) return state;
            return {
                ...state,
//                selected: state.paises[action.paisId]
            }
        default:
            return state;
    }
    
}

export default categoriasReducer;
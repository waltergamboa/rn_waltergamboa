import { paises } from "../../utils/preguntas-respuestas";
import { paisesTypes } from "../types";

const { SELECT_PAIS } = paisesTypes;

const initialState = {
    paises: paises,
    selected: null
}

const paisesReducer = (state = initialState, action)=>{
    switch (action.type){
        case SELECT_PAIS:
            // const indexPais = state.paises.findIndex(
            //     (pais) => pais.id === action.paisId
            // );
            // if(indexPais === -1) return state;
            return {
                ...state,
                selected: state.paises[action.paisId]
            }
        default:
            return state;
    }
    
}

export default paisesReducer;
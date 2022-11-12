import { capitales } from "../../utils/preguntas-respuestas";
import { capitalesTypes } from "../types";

const { SELECT_CAPITAL, CORRECTO_INCORRECTO } = capitalesTypes;

const initialState = {
    capitales: capitales,
    selected: null,
    correctoIncorrecto: null
}

const capitalesReducer = (state = initialState, action)=>{
    switch (action.type){
        case SELECT_CAPITAL:
            return {
                ...state,
                selected: state.capitales[action.capitalId]
            }
        case CORRECTO_INCORRECTO:
                return {
                    ...state,
                    correctoIncorrecto: action.correctoIncorrecto
                }
        default:
            return state;
    }
    
}

export default capitalesReducer;
import { puntajeTypes } from "../types";

const { ACTUALIZAR_PUNTAJE, REINICIAR_PUNTAJE } = puntajeTypes;

const initialState = {
    puntos: 0
}

const puntajeReducer = (state = initialState, action)=>{
    switch (action.type){
        case ACTUALIZAR_PUNTAJE:
            let puntaje = state.puntos;
            puntaje = puntaje + (action.puntos);
            return {
                ...state,
                puntos: parseInt(puntaje)
            }
            case REINICIAR_PUNTAJE:
                return {
                    ...state,
                    puntos: 0
                }            
        default:
            return state;
    }
}

export default puntajeReducer;
import { jugadoresTypes } from "../types";

const { SELECT_JUGADOR, DATOS_JUGADOR, DELETE_JUGADOR, SELECCIONAR_JUGADOR } = jugadoresTypes;

const initialState = {
    jugador: [],
    seleccionado: []
}

const jugadoresReducer = (state = initialState, action)=>{
    switch (action.type){
        case SELECT_JUGADOR:
        return {
            ...state,
            jugador: action.jugador
        }
        case DATOS_JUGADOR:            
        let actualizarJugadores = [];
        actualizarJugadores = [...state.jugador, {id: action.id, name: action.name, jugador: action.jugador, address: action.address, coords: action.coords}];
        return {
            ...state,
            jugador: actualizarJugadores
        }
        case DELETE_JUGADOR:
        const filteredJugador = state.jugador.filter(item => item.id !== action.id);
        return {
            ...state,
            jugador: filteredJugador
        }        
        case SELECCIONAR_JUGADOR:
                return {
                    ...state,
                    seleccionado: action.seleccionado
                }        
        default:
        return state;
    }
}

export default jugadoresReducer;
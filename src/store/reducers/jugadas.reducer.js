import { jugadasTypes } from "../types";

const { GET_JUGADAS, DELETE_JUGADAS, AGREGAR_JUGADA } = jugadasTypes;

const initialState = {
    list: []
}

const jugadasReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JUGADAS:
        return {
            ...state,
            list: action.jugadas
        }
        case AGREGAR_JUGADA:
            let actualizarJugadas = [];
            actualizarJugadas = [...state.list, {id: action.id, fecha: action.fecha, nombre: action.nombre, puntos: action.puntos}];
            return {
                ...state,
                list: actualizarJugadas
            }            
        case DELETE_JUGADAS:
            return {
                ...state,
                list: state.list.filter(jugadas => jugadas.id !== action.id)
            }
        default: 
            return state;
    }
}

export default jugadasReducer;
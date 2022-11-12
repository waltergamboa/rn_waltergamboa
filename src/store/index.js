import { applyMiddleware, combineReducers, createStore } from "redux";
import { capitalesReducer, categoriasReducer, jugadasReducer, jugadoresReducer, paisesReducer, puntajeReducer } from "./reducers";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    paises: paisesReducer,
    capitales: capitalesReducer,
    jugadores: jugadoresReducer,
    jugadas: jugadasReducer,
    categorias: categoriasReducer,
    puntaje: puntajeReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
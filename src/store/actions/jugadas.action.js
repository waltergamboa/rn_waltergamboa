import { URL_API } from '../../firebase';
import { jugadasTypes } from '../types';

const { AGREGAR_JUGADA, GET_JUGADAS, DELETE_JUGADAS } = jugadasTypes;

export const agregarJugada = (nombre, puntaje) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/jugadas.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    nombre: nombre,
                    puntos: puntaje

                })
            })

            const result = await response.json();
            const id = result?.insertId; 

             dispatch({
                 type: AGREGAR_JUGADA,
                 id: id,
                 fecha: Date.now(),
                 nombre: nombre,
                 puntos: puntaje
             })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getJugadas = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/jugadas.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            const jugadas = Object.keys(data).map(key => {
                return {
                    ...data[key],
                    id: key,
                }
            })

             dispatch({
                 type: GET_JUGADAS,
                 jugadas
             })


        }
        catch (error) {
            console.log(error.message);
        }
    }
}

export const deleteJugadas = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/jugadas/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            dispatch({
                type: DELETE_JUGADAS,
                id
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

import { deleteJugador, getJugador, insertJugador, updateJugador } from "../../db";

import { jugadoresTypes } from "../types";

const { SELECT_JUGADOR, DATOS_JUGADOR, DELETE_JUGADOR, SELECCIONAR_JUGADOR } = jugadoresTypes;

export const seleccionarJugador = (id, name) => ({
    type: SELECCIONAR_JUGADOR,
    seleccionado: [{ id: id, name: name }]
})

export const selectJugador =  ()=>{
return async (dispatch) => {
    try {
        const result = await getJugador();
        const jugador = result?.rows?._array
        
         dispatch({
             type: SELECT_JUGADOR,
             jugador
         })

    }
    catch (error) {
        console.log(error.message);
    }
}
};

export const datosJugador =  (name, image, address, coords)=>{
    return async (dispatch) => {
        try {
            const result = await insertJugador(name, image, "tres", "cuatro");;
            const id = result?.insertId; 

            dispatch({
                type: DATOS_JUGADOR,
                id: id,
                name: name,
                image: image,
                address: address,
                coords: coords
             })
    
        }
        catch (error) {
            console.log(error.message);
        }
    }
    };
    

    export const eliminarJugador =  (id)=>{
        return async (dispatch) => {
            try {
                const result = await deleteJugador(id);

                dispatch({
                     type: DELETE_JUGADOR,
                     id
                 })
        
            }
            catch (error) {
                console.log(error.message);
            }
        }
        };    

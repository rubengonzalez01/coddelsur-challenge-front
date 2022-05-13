import { useEffect } from 'react'

/**
 * Function hook se encarga de actualizar los parametros de busqueda de la URL en caso de autoload o modificacion
 * @example - useQueryId('query', state, query, setQuery);
 * @param {string} key - Llave del estado que se va a modificar Id o Query
 * @param {object} state - referencia al estado en el contexto
 * @param {object} setter - Setter del estado [setState]
 * @param {string} param - Parametro en el estado que contiene el id o query a ser consultado se obtiene del navegador

 * @return  void
 */
export const useQueryId = (key, state, setter, param) => {
  useEffect(() => {
    // Si la query o id en estado es diferente al del navegador
    if (state[key] !== param) {
      // Setea la del navegador y ejecuta useApi en el provider
      setter({ ...state, [key]: param })
    } else {
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.param])
}

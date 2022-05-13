import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CFG } from '../assets/cfg/config';

/**
 * Function hook se encarga de manejar los llamados al api
 * @example - useApi(state, setState, 'query', 'products', `/items?search=`)
 * @param {object} state - Estado del contexto se pasa por parametro
 * @param {object} setter - Setter del estado [setState]
 * @param {string} param - Parametro en el estado que contiene el id o query a ser consultado
 * @param {string} key - Key del estado donde va a ser destructurada la respuesta del request
 * @param {string} path - Path al que va a navegar al finalizar el request (Coincide con los endpoints del api)
 * @return  void
 */
export const useApi = (state, setter, param, key, path) => {
  const navigate = useNavigate();

  // Se obtiene la urlBase del archivo de config y la api key
  const url = CFG.baseURL;
  const api_key = '&key=' + CFG.apiKey;

  useEffect(() => {
    // Si el estado es null se evita renderizados innecesarios
    if (state[param] === null) {
      return
    }

    // Llamada al api
    axios
      .get(`${url}${path}${state[param]}${api_key}`)
      .then((resp) => {
        if (resp.data.items.length === 0){
          // si no trae resultados en la busqueda se navega a pagina de no resultados.
          navigate('/no-match');
        } else {
          // Se obtiene la data y se carga al estado del key correspondiente
          setter({ ...state, [key]: resp.data.items })
  
          // Se navega a la ruta dispuesta
          key === 'videos' ? navigate(`/video?search=${state[param]}`) : navigate(`/video/${state[param]}`);
        }
      })
      .catch((err) => {
        // Se navega a pagina de no resultados
        navigate('/no-match');
      })
  }, [state[param]]);
}

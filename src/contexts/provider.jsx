import React, { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';
import PropTypes from 'prop-types';

const ContextProvider = ({ children }) => {
  // Estado general del app enviado por ContextApi
  const [state, setState] = useState({
    query: null,
    id: null,
    videos: null,
    detail: null,
    count: 0,
    mainChange: false,
  });

  // Obtiene los videos buscados por query del api
  useApi(state, setState, 'query', 'videos', `/search?part=snippet,id&order=date&maxResults=4&q=`);

  // Obtiene el detalle del video seleccionado por id
  useApi(state, setState, 'id', 'detail', `/videos?part=snippet,statistics&id=`);

  return (
    <>
      <AppContext.Provider value={[state, setState]}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default ContextProvider;

// Se crea el contexto y se exporta
export const AppContext = createContext();

ContextProvider.propTypes = {
  children: PropTypes.node,
};

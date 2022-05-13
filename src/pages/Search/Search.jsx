/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Suspense, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../contexts/provider';
import { useQueryId } from '../../hooks/useParams';
import { CFG } from '../../assets/cfg/config';
import styles from './Search.module.scss';
import Info from '@material-ui/icons/Info';

const Videos = React.lazy(() => import('../../components/Videos/Videos'));

export default function Search() {
  const [state, setState] = useContext(AppContext);
  const myOverlay = useRef(null);
  // obtengo la url de los videos de youtube para visualizar según el id que se le pase
  const ytUrl = CFG.ytUrl;

  // Se obtiene la query de la url del navegador
  let query = new URLSearchParams(useLocation().search).get('search');

  // Setea en caso de modificacion o autoload.
  useQueryId('query', state, setState, query)

  // Vacia el id previamente visitado
  if (state.id !== null) {
    setState({ ...state, id: null })
  }

  let videoMain;
  let videoToPlay;
  let videoList = [];

  // solamente se limitó a que traiga 4 videos desde la api                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  if (state.videos) {
    videoMain = state.videos[0];
    videoToPlay = ytUrl + videoMain.id.videoId;
    videoList.push(state.videos[1]);
    videoList.push(state.videos[2]);
    videoList.push(state.videos[3]);
  }

  // Establece el id en el estado automaticamente rutea a la vista de detalle
  const handleDetail = (id) => {
    setState({ ...state, id });
  }

  // Permite manejar el contador de videos visto
  const handleCount = () => {
    if(myOverlay){
      myOverlay.current.style.display = 'none';
    }
    setState({ ...state, count: state.count + 1, mainChange: false })
  }

  useEffect(() => {
    if(state.mainChange && myOverlay.current){
      myOverlay.current.style.display = 'block';
    }
  });

  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='container pt-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-12 col-xl-8'>
            <div onClick={() => { handleCount() }} className={ styles.react_player }>
              { videoToPlay ? 
                <iframe                
                  id='ytPlayer'
                  className="w-100 h-100 sm:w-[80%] h-60 sm:h-80 sm:mx-4 sm:mb-4"
                  src={
                    videoToPlay.includes("/watch?v=")
                        ? videoToPlay.replace("/watch?v=", "/embed/")
                        : videoToPlay
                  }
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> : null }
              <div ref={ myOverlay } onClick={() => { handleCount() }} className={ styles.overlay }></div>              
            </div>
            <div className={`pb-5 ${ styles.video_footer }`}>
              { videoMain ? <h2>{ videoMain.snippet.title }</h2> : null }
              {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <button onClick={ () => handleDetail( videoMain.id.videoId ) } className={`btn ${ styles.btn_info }`}>
                <Info className={ styles.info } />
                Detail
              </button>
            </div>
          </div>
          <div className='col-lg-12 col-xl-3'>
            <div className={ styles.video_sidegroup }>
              { state.videos ? videoList.map((video) => <Videos video={ video } key={ video.id.videoId } />) : null}
            </div>
            <div className='pt-4 pb-5 video-footer'>
              <span>Videos watched: { state.count }</span>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

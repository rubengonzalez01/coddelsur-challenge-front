import React, { useContext } from 'react';

import styles from './Videos.module.scss';
import { AppContext } from '../../contexts/provider';

export default function Videos({ video }) {
  const [state, setState] = useContext(AppContext);

  let videos = [];

  // Busca el video seleccionado y lo ubica en la posición del video principal para ser reproducido
  const handlePosition = (video) => {
    videos = [...state.videos];
    const idx = videos.findIndex(v => v.id.videoId === video.id.videoId);
    if(idx >= 0) {
      videos.splice(idx, 1);
      videos.unshift(video);
      setState({...state, videos, mainChange: true });
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={ styles.video } onClick={() => handlePosition( video )}>
      <div className={ styles.img }>
        <img src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.title } />
      </div>
    </a>
  );
}
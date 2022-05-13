import React from 'react'
import styles from './Detail.module.scss';
import ThumbUp from '@material-ui/icons/ThumbUp';
import VisibilityRounded from '@material-ui/icons/VisibilityRounded';

export default function Detail({ videoDetail }) {

  const uploadDate = new Date(videoDetail.snippet.publishedAt);

  return (
    <div className={ styles.detail }>
      <h1 className='pb-3'>{ videoDetail.snippet.title }</h1>
      <div className={`row ${ styles.preview }`}>
        {/* image */}
        <div className='col-md-12 col-lg-7'>
          <img className={`pb-3 ${ styles.image }`} src={ videoDetail.snippet.thumbnails.high.url } alt={ videoDetail.snippet.title } />
        </div>

        {/* Aside Details */}
        <div className='col-md-12 col-lg-5'>
          <p> 
            <strong>Date: </strong>
            { uploadDate.toLocaleDateString() }
            <ThumbUp className={ styles.icon } />
            { videoDetail.statistics.likeCount }
            <VisibilityRounded className={ styles.icon } />
            { videoDetail.statistics.viewCount }
          </p>
          <p> 
            <strong>Channel Name: </strong>
            { videoDetail.snippet.channelTitle }
          </p>
          <p className={ styles.description }>
            <strong>Description: </strong>
            { videoDetail.snippet.description ? videoDetail.snippet.description : 'N/D' }
          </p>
        </div>
      </div>
    </div>
  );
}

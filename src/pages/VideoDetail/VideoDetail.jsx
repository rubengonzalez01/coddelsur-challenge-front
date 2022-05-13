import React, { Suspense, useContext } from 'react';
import { AppContext } from '../../contexts/provider';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useQueryId } from '../../hooks/useParams';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import styles from './VideoDetail.module.scss';

const Detail = React.lazy(() => import('../../components/Detail/Detail'));

export default function VideoDetail() {
  const [state, setId] = useContext(AppContext)

  const navigate = useNavigate();

  // Se obtiene el id de la url del navegador
  const { id } = useParams();

  // Setea en caso de modificacion o autoload.
  useQueryId('id', state, setId, id);

  const detail = state.detail;

  const goBackHandle = () => {
    navigate(`/video?search=${state['query']}`);
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='container pt-4'>
          <button onClick={() => { goBackHandle()} } className={`btn ${ styles.btn_back }`}>
            <ArrowBackIos />
            Back
          </button>
          { state.detail ? <Detail videoDetail={ detail[0] } /> : null } 
        </div>
      </Suspense>
    </>
  );
}

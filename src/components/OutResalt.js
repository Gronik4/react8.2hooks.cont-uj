import React from 'react';
import useJsonFetch from './useJsonFetch';
import fig from '../load.gif';
import propTypes from 'prop-types';

export const OutResalt = ({perf, blank}) => {
  const url = blank + perf;
  const [data, err, load] = useJsonFetch(url);
  if(!blank) {return;}
  if(load) {return <p className='out_p'>
    Загрузка...
    <img className='p_img' src={fig} alt='loading'/>
    </p>}
  if(err) {return <p className='out_p'>Ответ сервера: `{err.status}`</p>}
  if(data) {return <p className='out_p'>Ответ сервера: `Status: {data.status}`</p>}
}

OutResalt.propTypes = {
  perf: propTypes.string.isRequired,
  blank: propTypes.string.isRequired
}

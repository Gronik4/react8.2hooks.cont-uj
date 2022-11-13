import { useEffect, useState } from "react";
import propTypes from 'prop-types';

export default function useJsonFetch(url) {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState('')
  useEffect(() => {
    async  function getData(url) {
      if(!url) {return;}
      const responce = await fetch(url);
      const data = await responce.json();
      return data;
   }
    getData(url).then((res) => {
      if(res.status === 'ok') {
        setData(res);
        setLoad(false);
        setErr('');
      } else {setErr(res); setLoad(false);}
   }).catch((err) => {setErr(err); setLoad(false)});

    return () => {setLoad(true); setData({})}
  },[url]);

  return[data, err, load];
}

useJsonFetch.propTypes = {
  url: propTypes.string.isRequired
}

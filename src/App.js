import { useState } from 'react';
import './css/App.css';
import './css/stamp.css';
import { OutResalt } from './components/OutResalt';


function App() {
  const [perf, setPerf] = useState('');
  const [blank, setBlank] = useState();
  const blankVurl = process.env.REACT_APP_BLANK_URL;
  function hendlData(evt) {
    setBlank(blankVurl);
    const perfix = evt.target.textContent;
    setPerf(perfix);
  }
  return (
    <div className="App">
      <div className='btn_dlock'>
        <button className='btn'onClick={hendlData}>data</button>
        <button className='btn' onClick={hendlData}>error</button>
        <button className='btn' onClick={hendlData}>loading</button>
      </div>
      {blank && <OutResalt perf={perf} blank={blank}/>}
    </div>
  );
}

export default App;

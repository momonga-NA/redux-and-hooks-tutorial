import React , { useState } from 'react';

const App = props =>{
  const [state, setState] = useState(props);
  const reset = () => setState(props);

  return (
    <div className="App">
      <p>現在の{state.name}は、{state.price}です。</p>
      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
      <hr />
      <button onClick={reset}>リセット</button>
      <input type="text" value={state.name} onChange={e => setState({...state, name: e.target.value})} />
    </div>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}
export default App;
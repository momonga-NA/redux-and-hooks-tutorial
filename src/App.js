import React , { useEffect, useState } from 'react';

const App = props =>{
  const [state, setState] = useState(props);
  const reset = () => setState(props);

  useEffect(() => {
    console.log('This is like cmponentDidMount or ComonentDidUpdate');
  });

  useEffect(() => {
    console.log('This is like cmponentDidMount');
  },[]) // 空の配列を渡した場合、1度だけ実行する

  useEffect(() => {
    console.log('this name');
  }, [state.name]) // 指定したstateが変更された場合に実行


  return (
    <div className="App">
      <p>現在の{state.name}は、{state.price}です</p>
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
import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import reducer from '../reducers/index';
import EventForm from './EventForm';
import EventList from './EventList';
import AppContext from '../contexts/AppContext';

const App = () =>{

  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // Prop Drilling解消 
    <AppContext.Provider value={{ state, dispatch}}>
      <div className="container-fluid">
        <EventForm/>
        <EventList/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext'

const EventList = ({ state, dispatch}) => {

  // Context.Providerでなくても
  // useContextを利用する事で簡単に取得が可能
  const value = useContext(AppContext);

  return(
    <>
    <div>{value}</div>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map(event => (
            <Event key={event.id} dispatch={dispatch} event={event} />  
          ))}
        </tbody>
       </table>
    </>
  );
};

export default EventList;
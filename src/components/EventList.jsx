import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext'

const EventList = () => {

  const { state } = useContext(AppContext);

  return(
    <>
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
          {state.events.map(event => (
            <Event key={event.id} event={event} />  
          ))}
        </tbody>
       </table>
    </>
  );
};

export default EventList;
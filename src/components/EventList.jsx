import React from 'react';
import Event from './Event';

const EventList = ({ state, dispatch}) => {

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
          {state.map(event => (
            <Event key={event.id} dispatch={dispatch} event={event} />  
          ))}
        </tbody>
       </table>
    </>
  );
};

export default EventList;
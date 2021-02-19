import React, { useContext, useState } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions/index';
import AppContext from '../contexts/AppContext';


const EventForm = () => {

  const {state, dispatch} = useContext(AppContext);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body 
    })
    setTitle('');
    setBody('');
  }

  const deleteAllEvents = e => {
    e.preventDefault();
    if(window.confirm('全てのイベントを削除しますか？')){
      dispatch({
        type: DELETE_ALL_EVENTS
      })  
    }
  }

  const unCreatable = title === '' || body === '';

  return(
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label　htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label　htmlFor="formEventBody">ボディー</label>
          <input className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <hr />
        <button className="btn btn-primary btn-margin" disabled={unCreatable} onClick={addEvent} >イベントを作成する</button>
        <button className="btn btn-danger btn-margin" disabled={state.events.length === 0} onClick={deleteAllEvents}>全てのイベントを削除する</button>
      </form>
    </>
  );
};

export default EventForm;
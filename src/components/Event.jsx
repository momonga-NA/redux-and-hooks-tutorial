import React, { useContext } from 'react';
import { DELETE_EVENT } from '../actions/index';
import AppContext from '../contexts/AppContext';

const Event = ({dispatch, event}) => {

  const handleClickDeleteButton = () => {
    if(window.confirm(`id=${event.id}のイベントを削除してもよいですか？`)){
      dispatch({
        type: DELETE_EVENT,
        id: event.id
      })  
    }
  }

  const value = useContext(AppContext);
  console.log(value);

  return(
    <>
      <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button 
            type="button" 
            className="btn btn-danger"
            onClick={handleClickDeleteButton}
            >
            削除
            </button>
        </td>
      </tr>
    </>
  )
}

export default Event;
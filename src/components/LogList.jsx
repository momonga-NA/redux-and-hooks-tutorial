import React, { useContext } from 'react';
import Log from './Log';
import AppContext from '../contexts/AppContext'; 


const LogList = ()=> {

  const { state } = useContext(AppContext);

  return (
    <>
    <h4>ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>操作内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map(log => (
            <Log log={log} />
          ))}
        </tbody>
      </table>
    </>
  )

}

export default LogList;
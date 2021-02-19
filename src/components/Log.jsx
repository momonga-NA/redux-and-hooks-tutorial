import React from 'react';

const Log = ({log}) => {
  
  return (
    <>
      <tr>
        <td>{log.operationAt}</td>
        <td>{log.description}</td>
      </tr>
    </>
  )
}

export default Log
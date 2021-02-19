import { 
  ADD_OPERATION_LOG, 
  DELETE_ALL_OPERATION_LOGS 
} from '../actions/index';

const operationLogs = (state = [], action) => {

  switch(state.type){
    case ADD_OPERATION_LOG:
      return state;
    case DELETE_ALL_OPERATION_LOGS:
      const { operationAt, descriptionDate} = action;
      const operationLog = {
        operationAt, 
        descriptionDate        
      };
      return [operationLog ,...state];
    default:
      return state
  }
}

export default operationLogs;
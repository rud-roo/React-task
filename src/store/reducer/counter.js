export const counterReducer = (state = 0, aciton) => {
  switch(aciton.type){
    case "counter/incremented":{
      return state+aciton.payload;
    }
    case "counter/decremented":{
      return state-aciton.payload;
    }
    default:{
      return state;
    }
  }
}
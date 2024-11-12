export const outMiddleWear = (store) => (next) => (action) => {
  console.log(store.getState(), "store");
  console.log(action, "action");
  
if(typeof action === "function"){
  action(store.dispatch);
  return;
}

  next(action)
}
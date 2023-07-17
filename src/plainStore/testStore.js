import { store } from './plainStore';
import { iceCreamAction } from './iceCreamSlice';
import { dataAction } from './plainStoreSlics';

console.log('dataSliceMan', dataAction);
debugger;
console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => {
  //console.log('Updated State', store.getState());
});
//const { dataAction } = dataSliceMan;
store.dispatch(dataAction.decrease(2));
store.dispatch(dataAction.decrease(2));
store.dispatch(dataAction.increase(2));
store.dispatch(dataAction.increase(2));
store.dispatch(iceCreamAction.buy(2));

unsubscribe();

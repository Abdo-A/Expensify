import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store=configureStore(); //this will give us access to all the store properties

store.dispatch(addExpense({description:'Water Bill', createdAt: 33, amount:4500}));
store.dispatch(addExpense({description:'Gas Bill', createdAt: 1000, amount:1000}));
store.dispatch(addExpense({description:'Rent', createdAt: 20, amount:109500}));

const state=store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

//console.log(store.getState());

//The Provider component automatically passes the store to the components
const jsx=(
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx ,document.getElementById('app'));
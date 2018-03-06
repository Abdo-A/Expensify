import React from 'react';
import numeral from 'numeral';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import getVisibleExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import ExpensesSummary from './ExpensesSummary';


const ExpenseDashboardPage=(props)=>(
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList/>
    </div>
);


export default ExpenseDashboardPage;
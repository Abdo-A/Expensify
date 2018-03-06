import React from 'react';
import numeral from 'numeral';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import getVisibleExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import { connect } from 'react-redux';


export const ExpenseDashboardPage=(props)=>(
    <div>
        
        <h1>Viewing {props.expenseCount} {props.expenseCount===1?'expense':'expenses'} totalling {props.expensesTotal}</h1>

        <ExpenseListFilters />
        <ExpenseList/>
    </div>
);

const mapStateToProps=(state)=>{
    return{
        expenseCount: getVisibleExpenses(state.expenses,state.filters).length,
        expensesTotal: numeral(getTotalExpenses(getVisibleExpenses(state.expenses,state.filters))/100).format('$0,0.[00]')
    };
};


export default connect(mapStateToProps)(ExpenseDashboardPage);

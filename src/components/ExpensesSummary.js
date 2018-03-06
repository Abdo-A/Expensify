import React from 'react';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';


export const ExpensesSummary=({expenseCount, expensesTotal})=>(
    <div>
        <h1>Viewing {expenseCount} {expenseCount===1?'expense':'expenses'} totalling {expensesTotal}</h1>
    </div>
);


const mapStateToProps=(state)=>{
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: numeral(selectExpensesTotal(visibleExpenses)/100).format('$0,0.[00]')
    };
};


export default connect(mapStateToProps)(ExpensesSummary);
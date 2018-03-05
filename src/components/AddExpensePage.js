import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component{

    onSubmit=(expense)=>{
        // this.props.dispatch(addExpense(expense));
        this.props.makeAddExpense(expense);
        this.props.history.push('/');
    };

    render(){
        return(
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}


const mapDispatchToProps=(dispatch)=>({ //the mapDispatchToProps is just to help us simplify calling the addExpense action and hence simplify testing it
    makeAddExpense:(expense)=>{
        return dispatch(addExpense(expense));
    }
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
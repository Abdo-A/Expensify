import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense , removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{

    onSubmit=(expense)=>{
        // this.props.dispatch(editExpense(props.match.params.id,expense));
        this.props.makeEditExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    };
    
    onRemove=()=>{
        // this.props.dispatch(removeExpense({id: props.match.params.id}));
        this.props.makeRemoveExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };

    render(){
        return(
            <div>
                <ExpenseForm
                onSubmit={this.onSubmit}
                expense={this.props.expense}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    };
}



const mapStateToProps=(state,props)=>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id===props.match.params.id
        })
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        makeEditExpense:(id,expense)=>{
            return dispatch(editExpense(id,expense));
        },

        makeRemoveExpense:(id)=>{
            return dispatch(removeExpense(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
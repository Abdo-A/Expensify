import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import testExpenses from '../fixtures/expenses';


test('should render EditExpensePage correctly',()=>{
    const makeEditExpense=jest.fn();
    const makeRemoveExpense=jest.fn();
    const history={push:jest.fn()};
    const wrapper=shallow(<EditExpensePage makeEditExpense={makeEditExpense} history={history} makeRemoveExpense={makeRemoveExpense} expense={testExpenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',()=>{
    const makeEditExpense=jest.fn();
    const makeRemoveExpense=jest.fn();
    const history={push:jest.fn()};
    const wrapper=shallow(<EditExpensePage makeEditExpense={makeEditExpense} history={history} makeRemoveExpense={makeRemoveExpense} expense={testExpenses[0]}/>);
    wrapper.find('ExpenseForm').at(0).prop('onSubmit')(testExpenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(makeEditExpense).toHaveBeenLastCalledWith(testExpenses[0].id,testExpenses[0]);
});


test('should handle removeExpense',()=>{
    const makeEditExpense=jest.fn();
    const makeRemoveExpense=jest.fn();
    const history={push:jest.fn()};
    const wrapper=shallow(<EditExpensePage makeEditExpense={makeEditExpense} history={history} makeRemoveExpense={makeRemoveExpense} expense={testExpenses[0]}/>);
    wrapper.find('button').at(0).prop('onClick')(); //or .simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(makeRemoveExpense).toHaveBeenLastCalledWith({id:testExpenses[0].id});
});
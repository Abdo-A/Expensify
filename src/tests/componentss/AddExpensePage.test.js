import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import testExpenses from '../fixtures/expenses';


test('should render AddExpensePage correctly',()=>{
    const makeAddExpense=jest.fn();
    const history={push:jest.fn()};
    const wrapper=shallow(<AddExpensePage makeAddExpense={makeAddExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit',()=>{
    const makeAddExpense=jest.fn();
    const history={push:jest.fn()};
    const wrapper=shallow(<AddExpensePage makeAddExpense={makeAddExpense} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(testExpenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(makeAddExpense).toHaveBeenLastCalledWith(testExpenses[0]);
});
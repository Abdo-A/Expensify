import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import testExpenses from '../fixtures/expenses';


test('should correctly render expenses summary with one expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={'$94.34'}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should correctly render expenses summary with multiple expenses',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={'$94.34'}/>);
    expect(wrapper).toMatchSnapshot();
});
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage';
import testExpenses from '../fixtures/expenses';

test('should render ExpenseDashboardPage correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});

test('should view a single expense correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage expenseCount={1} expensesTotal={'$94.34'}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should view a more than one expense correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage expenseCount={2} expensesTotal={'$94.34'}/>);
    expect(wrapper).toMatchSnapshot();
});
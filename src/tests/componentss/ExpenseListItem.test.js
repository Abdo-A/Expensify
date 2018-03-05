import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from "../../components/ExpenseListItem";
import testExpenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly',()=>{
    const wrapper=shallow(<ExpenseListItem expense={testExpenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
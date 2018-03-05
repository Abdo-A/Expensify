import React from 'react';
import { shallow } from 'enzyme';
//we should test the unconnected component, so:
import { ExpenseList } from '../../components/ExpenseList'
//^ and that's why we will give it the expenses afterwards as props, instead of the store giving them to it as props
import testExpenses from '../fixtures/expenses';


test('should render expense list with expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses={testExpenses}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render expense list with empty message',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
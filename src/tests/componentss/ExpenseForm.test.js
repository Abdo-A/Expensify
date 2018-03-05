import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import testExpenses from '../fixtures/expenses';
import moment from 'moment'

test('should render ExpenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={testExpenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    //now we can simulate an interaction, like submitting the form: (here submitting it is has no description or amount, so an error will appear)
    wrapper.find('form').at(0).simulate('submit', { //this second argument (the object) is optional, it is to solve problems of needed inputs, we don't have these inputs now as we are just simulating, like that Jest doesn't understand the function 'preventDefault()'
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0); //.state accesses the state
    expect(wrapper).toMatchSnapshot()
});


test('should set description on input change',()=>{
    const wrapper=shallow(<ExpenseForm />);
    const value='New Description';
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});


test('should set note on textarea change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const value='New Note';
    wrapper.find('textarea').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});


test('should set amount if valid input',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const value = '3.4';
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe(value);
});


test('should not set amount if invalid input',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const value='12.2342';
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe('');
});


test('should call onSubmit prop for valid form',()=>{
    const onSubmitSpy=jest.fn(); //spy functions from jest will help us mock functions like the prop 'onSubmit' that we don't have a hold of here
    const wrapper=shallow(<ExpenseForm expense={testExpenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').at(0).simulate('submit', {
        preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: testExpenses[0].description,
        amount:testExpenses[0].amount,
        note:testExpenses[0].note,
        createdAt:testExpenses[0].createdAt
    });
});


test('should set new date on date change',()=>{
    const wrapper=shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('SingleDatePicker').at(0).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
});

test('should set calender focus on change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    const focused=true;
    wrapper.find('SingleDatePicker').at(0).prop('onFocusChange')({focused:focused});
    expect(wrapper.state('calenderFocused')).toBe(focused);
});
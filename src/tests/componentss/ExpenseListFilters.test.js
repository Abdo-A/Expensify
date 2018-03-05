import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{ //a function that is made before each of our tests, just to not write all that at the beginning of every test again
    setTextFilter=jest.fn();
    sortByDate=jest.fn();
    sortByAmount=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    wrapper=shallow(
        <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />);
});

test('should render ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly',()=>{
    wrapper.setProps({
        filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
    const value='test';
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});


test('should sort by date',()=>{
    const value='date';
    wrapper.find('select').at(0).simulate('change',{
        target:{value}
    });
    expect(sortByDate).toHaveBeenCalled();
});


test('should sort by amount',()=>{
    const value='amount';
    wrapper.find('select').at(0).simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});


test('should handle date changes',()=>{
    const startDate=moment(0);
    const endDate=moment(1000);
    wrapper.find('DateRangePicker').at(0).prop('onDatesChange')({
        startDate: startDate,
        endDate: endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


test('should handle date focus changes',()=>{
    const calenderFocused=null;
    wrapper.find('DateRangePicker').at(0).prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});
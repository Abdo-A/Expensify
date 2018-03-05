import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment'


test('should generate set start date action object',()=>{
    const time = moment();
    const action = setStartDate(time);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: time
    });
});


test('should generate set end date action object',()=>{
    const time = moment();
    const action = setEndDate(time);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: time
    });
});


test('should generate set text action object with provided text',()=>{
    const action = setTextFilter('abc');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'abc'
    });
});

test('should generate set text action object with no provided text',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by amount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('should generate sort by date action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});
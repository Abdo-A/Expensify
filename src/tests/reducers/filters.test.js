import filtersReducer from '../../reducers/filters';
import moment from 'moment'


test('should set up default filter values',()=>{
    //@@INIT is a type in redux which gets called initially by redux to set up default values
    const state=filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortby to amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date',()=>{
    const currentState={
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state=filtersReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});



test('should set text filter',()=>{
    const testText='test';
    const state=filtersReducer(undefined,{type:'SET_TEXT_FILTER', text:testText});
    expect(state.text).toBe(testText);
});


test('should set startDate filter',()=>{
    const testStartDate=moment(100);
    const state=filtersReducer(undefined,{type:'SET_START_DATE', startDate: testStartDate});
    expect(state.startDate).toBe(testStartDate);
});


test('should set endDate filter',()=>{
    const testendDate=moment(200);
    const state=filtersReducer(undefined,{type:'SET_END_DATE', endDate:testendDate});
    expect(state.endDate).toBe(testendDate);
});

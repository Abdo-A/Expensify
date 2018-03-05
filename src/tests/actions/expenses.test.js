import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense action object',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        //toBe is used with normal values, toEqual is used with objects or arrays
        type: 'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should edit an expense action object',()=>{
    const action=editExpense('123abc',{note:'new note'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates: {note:'new note'}
    });
});

test('should set up add expense action object with provided values',()=>{
    const expenseData={
        description:'amazing data',
        amount: 10032,
        createdAt:1000,
        note: 'this was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up the add expense action object with no values',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description:'',
            amount:0,
            createdAt:0,
            note: ''
        }
    });
});
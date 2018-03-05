import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state=expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});


test('should add an expense',()=>{
    const newExpense={
        id: '109',
        description: 'New laptop',
        note: '',
        amount: 29500,
        createdAt:20000
    };
    const action={
        type:'ADD_EXPENSE',
        expense: newExpense
    };
    const state=expensesReducer([...expenses],action);
    expect(state).toEqual([...expenses,newExpense]);

});


test('should remove an expense by id',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:expenses[0].id
    };
    const state=expensesReducer([...expenses],action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});


test('should not remove an expense if id is not found',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const state=expensesReducer([...expenses],action);
    expect(state).toEqual([...expenses]);
});



test('should edit an expense',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            description:'love'
        }
    };
    const state=expensesReducer([...expenses],action);
    expect(state).toEqual([{...expenses[0],description:'love'},expenses[1], expenses[2]]);
});

test('should not edit an expense if the id is not found',()=>{
    const action={
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            description:'love'
        }
    };
    const state=expensesReducer([...expenses],action);
    expect(state).toEqual([...expenses]);
})
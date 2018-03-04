import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

//Action Generators:

//Add_Expense

const addExpense=({description='', note='', amount=0, createdAt=0}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description:description,
        note:note,
        amount:amount,
        createdAt:createdAt
    }
});

//Remove_Expense

const removeExpense = ({id}={})=>({
    type: 'REMOVE_EXPENSE',
    id: id
});


//Edit_Expense

const editExpense=(id, updates)=>({
    type: 'EDIT_EXPENSE',
    id:id,
    updates:updates
});

//Set_text_filter

const setTextFilter=(text='')=>({
    type:'SET_TEXT_FILTER',
    text:text
});


//Sort_by_date

const sortByDate=()=>({
    type:'SORT_BY_DATE'
});


//Sort_by_amount

const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
});

//Set_start_date

const setStartDate=(startDate)=>({
    type: 'SET_START_DATE',
    startDate:startDate
});


//Set_end_date

const setEndDate=(endDate)=>({
    type: 'SET_END_DATE',
    endDate:endDate
});



//Expenses reducer:

const expensesReducerDefaultState=[];

const expensesReducer = (state=expensesReducerDefaultState, action)=>{

    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>expense.id!=action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });

        default: return state;
    }

};


//Filters reducer:

const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type){

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            };
        
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            };

        default: return state;
    }
};


//Get the expenses that should be visible to the user:
//(Getting EXPENSES according to the FILTERS)

const getVisibleExpenses=(expenses, {text, sortBy, startDate, endDate})=>{

    const filteredExpenses= expenses.filter((expense)=>{
        const startDateMatch = typeof startDate!=='number' || expense.createdAt>=startDate;

        const endDateMatch = typeof endDate!=='number' || expense.createdAt<=endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });

    return filteredExpenses.sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt? 1:-1;
        }else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1;
        }
    });
};



//Creating the store:
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));


store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:40, createdAt:-1000}));
const expenseThree = store.dispatch(addExpense({description:'Haha', amount:300, createdAt:-500}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

// store.dispatch(setTextFilter('co'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState={
    expenses: [{
        id: 'dsfdfwv',
        description: 'January Rent',
        note: 'This is the final payment for that address',
        amount: 54500,
        createdAt:0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};



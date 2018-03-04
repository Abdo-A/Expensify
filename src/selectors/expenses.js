
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

export default getVisibleExpenses;
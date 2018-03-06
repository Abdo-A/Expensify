

//Get the total of the amounts of the passed expenses


const getTotalExpenses=(expenses)=>{
    
    return expenses.reduce((sum,value)=>{
        return sum+value.amount;
    },0);
    
};


export default getTotalExpenses;


    // or
    // if(expenses.length===0){
    //     return 0;
    // } else {

    //     return expenses.map((expense)=>expense.amount).reduce((sum,value)=>{
    //         return sum+value;
    //     },0);
    // }


    //or
    // var x=0;

    // if(Array.isArray(expenses)){
    //     expenses.forEach((expense)=>{
    //         x+=expense.amount;
    //     });
    // }
    // else{
    //     x=expenses.amount;
    // }
    
    // return x;
    
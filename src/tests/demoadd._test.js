const add = (a,b)=>a+b;

const getGreeting = (name='Anonymous')=>`hello ${name}!`;

//the test keyword to make the test, the first input is a string and the second is a function

test('should add 2 numbers', ()=>{
    const result = add(3,4);

    expect(result).toBe(7);
});


test('should greet someone',()=>{
    const result = getGreeting('Abdo');
    expect(result).toBe('hello Abdo!');
});

test('should say hi to strangers',()=>{
    const result = getGreeting();
    expect(result).toBe('hello Anonymous!');
});
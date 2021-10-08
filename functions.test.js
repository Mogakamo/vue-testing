const { test, expect } = require('@jest/globals');
const { fetchUsers } = require('./functions');
const functions = require('./functions');

//equals
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

//not
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false
//toBeNull
test('Should be nulll', () => {
    expect(functions.isNull()).toBeNull();
})

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(2)).not.toBeFalsy();
})

//toEqual
test('User should be Amos Mogaka object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Amos',
        lastName: 'Mogaka'
    });
});

//less than and greater than
test('Should be under 1600', () => {
    const loadOne = 800;
    const loadTwo = 800;
    expect (loadOne + loadTwo).toBeLessThanOrEqual(1600)
})

// Regex - Regular expressions 
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

//working async data

//Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1)
    return functions.fetchUsers()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
});

//Async await
test('User fetched name should be Leanne Graham - Async await implemented', async() => {
    expect.assertions(1)
    const data = await fetchUsers()
    expect(data.name).toEqual('Leanne Graham')
});
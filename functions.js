const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Amos' }
        user['lastName'] = 'Mogaka';
        return user;
    },
    fetchUsers: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(err => 'error')
}

module.exports = functions
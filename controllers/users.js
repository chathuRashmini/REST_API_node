import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();

    const userWithId = {...user, id: userId};

    users.push(userWithId);

    res.send(`User ${user.firstName} has been added!`);
};

export const getUser = (req, res) => {
    res.send(users)
};

export const getUserById = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`Deleted the user with the id ${id}.`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToBeUpdated = users.find((user) => user.id === id);

    if(firstName) {
        userToBeUpdated.firstName = firstName;
    }
    if(lastName) {
        userToBeUpdated.lastName = lastName;
    }
    if(age) {
        userToBeUpdated.age = age;
    }

    res.send(`User with the id ${id} has been updated.`)
};
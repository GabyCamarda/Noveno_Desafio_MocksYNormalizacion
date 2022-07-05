const express = require('express');
const { Router } = express;

const router = Router();

const users = [
    {
        name: 'Gabriel',
        age: '24',
        email: 'gabrielcamardarojas@gmail.com'
    },
    {
        name: 'Juan',
        age: '20',
        email: 'juan@gmail.com'
    }
];

router.get('/', (req, res) => {
    try {
        res.json(users)
    }
    catch (error) {

    }
})

module.exports = router;
const express = require('express');
const app = express();
const axios = require('axios').default;
const client = require('./client');

app.get('/', async(req, res) => {
    const cachedvalue = await client.get('todos');
    if(cachedvalue){
        return res.json(JSON.parse(cachedvalue) );
    }
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
    await client.set('todos', JSON.stringify(response.data));
    await client.expire('todos', 60); 
    return res.json(response.data);
});

app.listen(9000, ()=>{
    console.log("Server is running on port 9000");
})
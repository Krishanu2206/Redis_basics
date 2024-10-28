const client = require('./client');

async function init(){
    const result = await client.lpush('friends:bekar', 'enemy:unknown');
    const result2 = await client.lpop('friends:bekar');
    console.log("Result", result2);
}

init();
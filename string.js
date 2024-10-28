const client = require('./client');

async function init(){
    // await client.set('user:4', 'arka')
    // await client.expire('user:4', 10)
    const result = await client.get('user:4');
    console.log("Result", result);
}
init()
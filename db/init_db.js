
const {client}= require('./')


async function dropTables(){
    try {
        await client.query(`
        DROP TABLE IF EXISTS regulators;
        `)
    } catch (error) {
        console.log(error)
    }
}

async function createTables(){
    try {
        await client.query(`
        CREATE TABLE regulators(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            example INTEGER NOT NULL
        );
        `)
    } catch (error) {
        console.log(error)
    }
}

async function buildTables(){
    try {
        client.connect();
        dropTables();
        createTables();
    } catch (error) {
        console.log(error)
    }
}


buildTables()
.then(console.log("tables built"))
.catch(console.error)
.finally(()=>client.end());
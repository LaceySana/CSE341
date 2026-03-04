require('dotenv').config();
const { MongoClient } = require('mongodb');
const databaseUri = process.env.DATABASE_URI;

async function main() {

    const client = new MongoClient(databaseUri);

    
    try {
        await client.connect();

        await listDatabases(client);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();

    console.log('Databases:');
    databaseList.databases.forEach(db => {
        console.log(` - ${db.name}`);
    });
}
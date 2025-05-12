const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const mongoUrl = 'mongodb://db:27017'; // Connect to the MongoDB service in Docker

app.get('/', async (req, res) => {
  try {
    const client = new MongoClient(mongoUrl);
    await client.connect();
    const db = client.db('test');
    const collections = await db.listCollections().toArray();
    await client.close();

    res.send(`
      <html>
        <body>
          <h1>MongoDB Connection Successful</h1>
          <p>Collections in 'test' database:</p>
          <ul>
            ${collections.map(col => `<li>${col.name}</li>`).join('')}
          </ul>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send(`
      <html>
        <body>
          <h1>MongoDB Connection Failed</h1>
          <p>${error.message}</p>
        </body>
      </html>
    `);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
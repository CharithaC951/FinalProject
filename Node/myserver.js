const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Charitha:Chinnapapannagari@cluster0.rsphcia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function getRecipesData() {
    await client.connect();
    const cursor = client.db("Recipes").collection("momCollection").find({});
    const results = await cursor.toArray();
    await client.close();
    return results;
}

const server = http.createServer(async (req, res) => {

    console.log(req.url);
   
    /*

    if req url is /api send db.json data
    if req url is / send portfolio
    else send 404

    */

    if (req.url === '/'){

        res.setHeader('Access-Control-Allow-Origin','*');

        // read my portfolio file

        fs.readFile(path.join(__dirname,'public','index.html'), 'utf-8', (err, data) => {
            if (err)  throw err ;
            res.writeHead(200, {
                'Content-Type': 'text/html'
                
            });
            res.end(data)
        }
        );
        // res.end("my home page");
    }
    else if (req.url === '/api') {
        try {
            const data = await getRecipesData();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Database error');
        }
    } 
    else{
        fs.readFile(path.join(__dirname,'public','404.html'), 'utf-8', (err, data) => {
            if (err)  throw err ;
            res.writeHead(404, {
                'Content-Type': 'text/html',
                
            });
            res.end(data)
        }
        );
    }
});
server.listen(8899, async () => {
    console.log("Yay! Server is running on http://localhost:8899");
});
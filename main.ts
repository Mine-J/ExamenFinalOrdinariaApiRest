import { MongoClient } from "mongodb";
import {  } from "./types.ts";
import {  } from "./resolvers.ts";

const url = Deno.env.get("MONGO_URL");

if(!url) {
  console.log("No se ha podido conectar a la URL");
  Deno.exit(-1);
}

const client = new MongoClient(url);
const dbName = 'examenOrdinariaApiRest';

await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const nombreCollection = db.collection<>('');
const nombreCollection = db.collection<>('');

const handler = async (
  req: Request
): Promise<Response> => {
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  if(method === "GET") {
    if(path === "/") {
      
    }
  } else if(method === "POST") {
    
  } else if(method === "PUT") {
    
  } else if(method === "DELETE") {
    
  }

  
  return new Response("Endpoint not found", { status: 400 });
};

Deno.serve({port: 3000}, handler);
import query from "../index.js";

async function createResourceTable() {
  await query(`CREATE TABLE IF NOT EXISTS resources (
    resourceID SERIAL PRIMARY KEY, 
    title VARCHAR(255),
    topic VARCHAR(255),
    resource_type VARCHAR(255),
    week VARCHAR(255),
    thumbnail VARCHAR(255),
    url VARCHAR(500),
    description VARCHAR(255)
)`);
  console.log("Created Resource Table!");
}

createResourceTable();



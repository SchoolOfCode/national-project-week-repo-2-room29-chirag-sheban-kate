// create function that would get all resources from the database
// export the function ^^^
// import it into app.js and put it in route (/resources)
import query from "../db/index.js";

async function getAllResources() {
  const data = await query("SELECT * FROM resources");
  console.log(data.rows);
  return data.rows;
}

export default getAllResources;
getAllResources();

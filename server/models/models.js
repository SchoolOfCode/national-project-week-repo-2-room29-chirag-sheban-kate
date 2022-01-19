// create function that would get all resources from the database
// export the function ^^^
// import it into app.js and put it in route (/resources)
import query from "../db/index.js";

export async function getAllResources() {
   const data = await query("SELECT * FROM resources");
   console.log(data.rows);
   return data.rows;
}

export async function getResourcesById(resourceId) {
   const data = await query("SELECT * FROM resources WHERE resourceid = $1;", [
      resourceId,
   ]);
   console.log(data.rows);
   return data.rows;
}

export async function getResourcesByTitle(title) {
   const data = await query(
      `SELECT * FROM resources WHERE title ILIKE '%' || $1 || '%'; `,
      [title]
   );
   return data.rows;
}

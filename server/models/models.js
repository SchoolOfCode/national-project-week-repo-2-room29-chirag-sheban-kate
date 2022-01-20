// create function that would get all resources from the database
// export the function ^^^
// import it into app.js and put it in route (/resources)
import query from "../db/index.js";

export async function getAllResources() {
   const data = await query("SELECT * FROM resources;");
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

//create rescource do we need to add an id?
export async function addNewResource(
   title,
   topic,
   resource_type,
   week,
   thumbnail,
   url,
   description
) {
   const data = await query(
      "INSERT INTO resources (title, topic, resource_type, week,thumbnail, url, description) VALUES($1, $2, $3, $4, $5, $6, $7);",
      [title, topic, resource_type, week, thumbnail, url, description]
   );

   return data.rows;
}

export async function updateResourceById(
   title,
   topic,
   resource_type,
   week,
   thumbnail,
   url,
   description,
   resourceId
) {
   const data = await query(
      "UPDATE resources SET title = $1, topic = $2, resource_type = $3, week = $4, thumbnail = $5, url = $6, description = $7 WHERE id = $8 RETURNING *;",
      [
         title,
         topic,
         resource_type,
         week,
         thumbnail,
         url,
         description,
         resourceId,
      ]
   );
   return data.rows;
}

export async function deleteResourcesById(resourceId) {
   const data = await query("DELETE * FROM resources WHERE resourceid = $1;", [
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

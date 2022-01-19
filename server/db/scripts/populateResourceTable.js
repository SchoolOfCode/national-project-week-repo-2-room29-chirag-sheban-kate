import query from '../index.js'
import resources from '../resource-data.js'

const sqlString = `INSERT INTO resources (title, topic, resource_type, week, thumbnail, url, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

async function populateResourceTable() {
  
  for (let i = 0; i < resources.length; i++) {
      const title = resources[i].title;
      const topic = resources[i].topic;
      const resource_type = resources[i].resource_type;
      const week = resources[i].week;
      const thumbnail = resources[i].thumbnail;
      const url = resources[i].url;
      const description = resources[i].description;
      
      const res = await query(sqlString, [title, topic, resource_type, week, thumbnail, url, description]);
      console.log(res);
  }
}

populateResourceTable()
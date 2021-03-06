import express from "express";
import cors from "cors";

// import usersRouter from "./routes/users.js";
// import resources from "./db/resource-data.js";
import {
  getAllResources,
  getResourcesById,
  getResourcesByTitle,
  updateResourceById,
  addNewResource,
  deleteResourcesById,
} from "./models/models.js";

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/users", usersRouter);

// app.use(function (req, res, next) {
//    res.status(404).json({
//       message: "We couldn't find what you were looking for 😞",
//    });
// });

//get all resources
app.get("/", async function (req, res, next) {
  console.log("working, testing");
  res.json({
    message: "connected to local server",
  });
});

app.get("/resources", async function (req, res, next) {
  console.log("getting resources");
  const title = req.query.title;

  if (title) {
    const searchResults = await getResourcesByTitle(title);
    res.json({
      success: true,
      message: `Searched titles for ${title}`,
      payload: searchResults,
    });
    return;
  }
  const resources = await getAllResources();
  res.json({ message: "here are all the resources", payload: resources });
});

//get resources by id
app.get("/resources/:id", async function (req, res, next) {
  const id = req.params.id;
  const resource = await getResourcesById(id);
  res.json({
    message: "here is the requested resource by id",
    payload: resource,
  });
});

app.delete("/resources/:id", async function (req, res, next) {
  const id = req.params.id;
  const resource = await deleteResourcesById(id);
  res.json({
    message: "here is the requested resource by id",
    payload: resource,
  });
});

app.put("/resources/:id", async function (req, res, next) {
  const id = req.params.id;
  const { title, topic, resource_type, week, thumbnail, url, description } =
    req.body;
  const updatedResource = await updateResourceById(
    title,
    topic,
    resource_type,
    week,
    thumbnail,
    url,
    description,
    id
  );
  res.json({
    message: "here is the updated resource",
    payload: updatedResource,
  });
});

app.post("/resources", async function (req, res, next) {
  const { title, topic, resource_type, week, thumbnail, url, description } =
    req.body;
  const newResource = await addNewResource(
    title,
    topic,
    resource_type,
    week,
    thumbnail,
    url,
    description
  );
  res.json({
    success: true,
    message: "new resource added!",
    payload: newResource,
  });
});

//DELETE

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;

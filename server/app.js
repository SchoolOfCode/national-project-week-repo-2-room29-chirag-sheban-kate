import express from "express";
// import usersRouter from "./routes/users.js";
import resources from "./db/resource-data.js";

const app = express();

// app.use(express.json());

// app.use("/users", usersRouter);

// app.use(function (req, res, next) {
//    res.status(404).json({
//       message: "We couldn't find what you were looking for 😞",
//    });
// });

app.get("/", function (req, res, next) {
   res.json({ message: "here are all the resources", payload: resources });
});

app.use(function (err, req, res, next) {
   console.error(err.stack);
   res.status(500).json(err);
});

export default app;

import express from "express";
import { json } from "body-parser";
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter
} from "./routes";

const app = express();
app.use(json());

app.use("/api/users", currentUserRouter);
app.use("/api/users", signinRouter);
app.use("/api/users", signoutRouter);
app.use("/api/users", signupRouter);

app.listen(3000, () => {
  console.log("Auth service listening on port 3000!");
});

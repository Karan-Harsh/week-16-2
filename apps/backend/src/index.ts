import express from "express";
import { VALUE } from "@repo/common/config";

console.log(VALUE);
const app = express();

app.get("/", (req: any, res: any) => {
  res.json({
    message: "heelo world",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

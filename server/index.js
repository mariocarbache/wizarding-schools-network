const port = process.env.PORT || 3000;
const app = require("./app");

const apiRouter = require("./api/index");

app.use("/", apiRouter);
app.listen(port, () => console.log(`listening on port ${port}`));

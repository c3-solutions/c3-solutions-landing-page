const express = require('express');
const app = express();
const logger = require("morgan");
const cors = require('cors');
const session = require("express-session");
const RedisStore = require('connect-redis')(session);

//////////////////////////////////////////////////////////////////////
/*                         Middle Ware                              */
//////////////////////////////////////////////////////////////////////

app.use(express.json());
app.use(logger("dev"));

//////////////////////////////////////////////////////////////////////
/*                            Routes                                */
//////////////////////////////////////////////////////////////////////

app.options('*', cors({
  origin: ['http://localhost:3030'],
  credentials: true,
}))

const sessionRouter = require("./routes/session");
app.use("/api", sessionRouter);

const usersRouter = require("./routes/users");
app.use("/api", usersRouter);

const githubRouter = require("./routes/github");
app.use("/api", githubRouter);

//////////////////////////////////////////////////////////////////////
/*                            Server                                */
//////////////////////////////////////////////////////////////////////

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`📡  Listening on port ${port}`));
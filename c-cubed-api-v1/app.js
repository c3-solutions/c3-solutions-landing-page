const express = require('express');
const app = express();
const logger = require("morgan");
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

const sessionRouter = require("./routes/session");
app.use("/api", sessionRouter);

//////////////////////////////////////////////////////////////////////
/*                            Server                                */
//////////////////////////////////////////////////////////////////////

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`📡  Listening on port ${port}`));
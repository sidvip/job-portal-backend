const fs = require("fs");
const path = require("path");
const logger = require("morgan");
const express = require("express");
const process = require("process");
const cors = require("cors");
const bodyParser = require("body-parser");
const initializeModels = require("./database/model-initializer");
const ENV = process.env.NODE_ENV;
const { jobSeed, userSeed } = require("./database/seeder");
const jobRouter = require("./routes/jobs/jobs");
const userRouter = require("./routes/users/users");
const ENV_PATH = path.resolve(__dirname, `.env`);

const {
    parsed: {
        PORT,
    },
} = require("dotenv")
    .config({ path: ENV_PATH });

// Logging the Express route calls
const LOG_DIR = path.resolve(__dirname, "logs", "all.log");
const accessLogStream = fs.createWriteStream(LOG_DIR, { flags: "a" });

const app = express();

const CORS_OPTIONS = {
    origin: "http://localhost:3000",
    credentials: true,
    // optionsSuccessStatus: 200,
};
app.use(cors(CORS_OPTIONS));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("combined", { stream: accessLogStream }));


// Initialize the Models inside table
// initializeModels();

// Seed the database
// (async () => {
//     // await jobSeed();
// await userSeed();
// })();

app.use(jobRouter);
app.use(userRouter);

app.use(/* eslint-disable global-require */

    (err, req, res, next) => {
        const errLogger = require("node-logger")
            .createLogger(path.resolve(__dirname, "..", "logs", "error.log"));
        const msg = `\n--------------------------------\npath: ${req.originalUrl}
        \nbody: ${JSON.stringify(req?.body || {})}\n
        methods: ${JSON.stringify(req?.route?.methods || {})}\n
        ${err.stack}\n--------------------------------`;
        // eslint-disable-next-line no-unused-expressions
        ENV === "dev" ? console.log(msg) : errLogger.log(msg);
        console.log("--------------------------------");
        res.status(err.status || 500).json({
            success: false,
            status: err.statusCode || 500,
            message: err.message || "Something went wrong, please try again later",
            stack: ENV === "dev" ? err.stack : {},
        });
    }
);


app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

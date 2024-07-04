
import express from "express"; // in the node_modules
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

// const privateMiddleware = (req, res, next) => { // = controller.
//     const url = req.url;
//     if (url === '/protected') {
//         return res.send("<h1>Not Allowed</h1>");
//     }
//     next();
// }

// const handleHome = (req, res) => {
//     //return res.end();
//     return res.send("<h1>I love middlewares</h1>");
// }

// const handleLogin = (req, res) => {
//     return res.send({ message : "Login here"});
// }

// const handleProtected = (req, res) => {
//     return res.send("welcome to the private lounge");
// }

// app.use(logger);
// app.use(privateMiddleware);

//app.get("/", handleHome);
// app.get("/", handleHome);
// app.get("/login", handleLogin);
//app.get("/protected", handleProtected);

export default app;
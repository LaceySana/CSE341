const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get("/", lesson1Controller.sayHello);
routes.get("/name", lesson1Controller.displayMyName);

module.exports = routes;
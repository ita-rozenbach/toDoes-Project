module.exports = app => {
    const toDo = require("../controllers/toDo.controller");
    var router = require("express").Router();
    router.get("/getAllTodos", toDo.getAllTodos);//איזה פונקציה להפעיל
    router.post("/add", toDo.add);
    router.post("/update", toDo.update);
    router.delete("/delete",toDo.delete)
    app.use("/api/toDo", router);
}

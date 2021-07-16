const db = require("../models");
const todo = db.toDo;
const User = db.user;
const session = require('sessionstorage');
const { toDo } = require("../models");


exports.getAllTodos = (req, res) => {
    todo.find({ 'userId': JSON.parse(session.getItem('userId')) })
        .then(data => { res.send(data) })
        .catch(err => { res.status(500).send({ message: err.message || "message from error" }) });
}


exports.add = (req, res) => {
    let newTodo = new todo({
        userId: JSON.parse(session.getItem('userId')),
        title: req.param("title"),
        completed: false
    })
    newTodo.save(newTodo)
        .then(data => { res.send(data) })
        .catch(err => { res.status(500).send({ message: err.message || "error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" }) });
}
exports.update = (req, res) => {
    let atodo = {};
    todo.find({ '_id': req.param('id') }).then(data => {
        let p = data;
        let k;
        for (let [key, value] of Object.entries(p[0].$__)) {
            if (key == '_id')
                k = value;
        }
        atodo._id = k;
        atodo.userId = JSON.parse(session.getItem('userId'));
        if (req.param("title"))
            atodo.title = req.param("title");
        else
            atodo.title = data.title;
        if (req.param("completed"))
            atodo.completed = req.param("completed");
        else
            atodo.completed = data.completed;
        let otherToDo = new toDo(atodo);
        todo.findOneAndUpdate({ _id: k }, otherToDo, (succ, err) => {
            console.log("err" + err);
            console.log("succ" + succ);
        })
            .then(data => { res.send(data) })
            .catch(err => { res.status(500).send({ message: err.message || "error!!!!!!!" }) })
    }
    ).catch(err => res.status(500).send("the update was wrong"));

}
exports.delete = (req, res) => {
    console.log("in delete:");
    let todoId = req.param("todoId");
    
    todo.findOneAndRemove({ _id: todoId }, (err) => {
        if (err)
            console.log("error: " + err);
        else
            console.log("succsess delete");
            res.send("from delete");
    })
}
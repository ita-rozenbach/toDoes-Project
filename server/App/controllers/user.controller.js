const db = require('../models');//ייבוא של הדי בי
const User = db.user;
const session = require('sessionstorage');
console.log(db);
console.log(User);
exports.getAll = (req, res) => {
    User.find({})
        .then(data => {
            console.log(User);
            console.log(data);
            res.send(data);
        })
        .catch(err => { res.status(500).send({ message:  /*err.message ||*/ "Some error occurred while retrieving user." }) })
}

exports.add = (req, res) => {
    console.log(req.name)
    let newuser = new User({
        "name": req.param("name"),
        "userName": req.param("userName"),
        "mail": req.param("mail")
    });
    console.log(newuser.name);
    newuser.save()
        .then(data => {
            session.setItem("userId", data._id);
            res.send(data);
        })
        .catch(err =>
            res.send({ massage: /*err.massage || */"Some error occurred while creating the user." }))

};
exports.getUserByDetails = (req, res) => {
    let findUser = null;
    // User.find({ userName: req.param("userName"), mail: req.param("mail") })
    //     .then(data => {
    //         console.log(data);
    //         session.setItem('userId', JSON.stringify(data[0]._id))
    //         console.log("userId :" + session.getItem("userId"));
    //         res.send(data)
    //     })
    //     .catch(err => { res.status(500).send({ massage:/* err.massage || */"Some error occurred while creating the user." }) })
    User.find({ userName: req.param("userName") })
        .then(data => {
            console.log(data);
            if (data[0].mail == req.param("mail")) {
                session.setItem('userId', JSON.stringify(data[0]._id))
                console.log("userId :" + session.getItem("userId"));
                res.send(data)
            }
            else {
                res.send({ message: "wrong mail" });
            }
        })
        .catch(err => { res.send({ massage:/* err.massage || */"not exists userName"}) })

};
exports.update = (req, res) => {
    if (session.getItem('userId') == undefined)
        return;
    let updateUser = {};
    let a = JSON.parse(session.getItem("userId"));
    console.log("from session: " + a)
    User.find({ '_id': a })
        .then(data => {

            let p = data;
            let k;
            for (let [key, value] of Object.entries(p[0].$__)) {
                if (key == '_id')
                    k = value;
            }
            // console.log("data in update: "+data);
            // if(data.length==0)
            // res.send({message:"no data"});
            updateUser._id = k;
            if (req.param("name"))
                updateUser.name = req.param("name");
            else
                updateUser.name = data.name
            if (req.param("userName"))
                updateUser.userName = req.param("userName");
            else
                updateUser.userName = data.userName;
            if (req.param("mail"))
                updateUser.mail = req.param("mail");
            else
                updateUser.mail = data.mail;
            console.log(updateUser);
            let newUser = new User(updateUser);
            User
                .findOneAndUpdate({ _id: k }, newUser, (succ, err) => {
                    console.log("err" + err);
                    console.log("succ" + succ);
                })
                .then(data => { res.send(data) })
                .catch(err => { res.status(500).send({ message: err.message || "error: not updated" }) });
        })
        .catch(err => { res.status(500).send({ massage:/* err.massage || */"Some error occurred while updating the user." }) })



}
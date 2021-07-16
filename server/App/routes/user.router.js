module.exports=app=>{
    const user=require("../controllers/user.controller");
    var router=require("express").Router();
    router.get("/",user.getAll);//איזה פונקציה להפעיל
    router.post("/add",user.add);
    router.get("/getUserByDetails",user.getUserByDetails);
    router.post("/update",user.update);
    //router.delete("/delete",)
    app.use("/api/user",router);
}
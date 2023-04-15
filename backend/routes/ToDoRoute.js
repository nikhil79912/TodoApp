const {Router} =require("express");
const { getToDo, saveToDo, deleteToDo,updatetodo } = require("../controllers/ToDoControllers");
// const {  } = require("../../frontend/todo/src/utils/HandleApi");

const router= Router()

router.get("/", getToDo);
router.post("/save", saveToDo);

router.post("/update", updatetodo);

router.post("/delete", deleteToDo);

module.exports = router;

module.exports=router;
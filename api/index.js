const router = require("express").Router();

//Mount on /api/

router.use("/addStudent", require("./addStudent"));

//404 Handling
router.use((req,res,next)=>{
    const error = new Error('404 NOT FOUND');
    error.status = 404;
    next(error);
});

module.exports = router;
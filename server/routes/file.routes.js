const Router = require('express');
const fileController=require("../controllers/fileController")

const router = new Router();

router.post('/createFile',fileController.createFile)
router.post('/updateFile',fileController.updateFile)
router.get('/getFiles',fileController.getFiles)
router.delete('/delFile/:_id',fileController.delFile)

module.exports = router;
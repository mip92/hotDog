const Router = require('express');
const fileController=require("../controllers/fileController")

const router = new Router();

router.post('',fileController.createFile)
router.get('',fileController.getFiles)

module.exports = router;
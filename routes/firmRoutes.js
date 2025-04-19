
const express = require('express');
const firmController = require('../controllers/firmController');
const verifyToken = require('../middlewares/verifyToken');
const {addFirm} = require('../controllers/firmController');
const upload = require('../middlewares/upload');


const router = express.Router()

router.post('/add-firm', verifyToken,upload.single('image'), addFirm);

router.get('/uploads/:imageName', (req,res)=>{
    const imageName = req.params.imageName;
    res.headersSent('Content-type', 'image/jpeg')
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
});

router.delete('/:firmId', firmController.deleteFirmById);

module.exports = router;
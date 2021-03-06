
const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images/user')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-avatar-' + Date.now() + path.extname(file.originalname))
    }
})

module.exports = multer({storage:storage})
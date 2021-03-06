
const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images/products')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-product-' + Date.now() + path.extname(file.originalname))
    }
})

module.exports = multer({storage:storage})
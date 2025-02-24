const express = require('express');
const router = express.Router();
router.get('/info', function (req, res) => {

    return res.json({
        message: 'Hello from v1, index.js file'});
});

module.exports = router;
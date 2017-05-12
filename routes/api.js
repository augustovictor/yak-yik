const express = require('express')
let router = express.Router()

router.get('/:resource', (req, res, next) => {

    const resource = req.params.resource;
    res.json({
        confirmation: 'success',
        resource    : resource
    });
});

module.exports = router
/* global module */
var RequestCaching = require('node-request-caching');
var rc = new RequestCaching();
var google_api_key = process.env.google_api_key;
module.exports = function (app, express) {
    var router = express.Router();

    router.get('/geocode/:address', function (req, res, next) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json';
        rc.get(url, {
            key: google_api_key,
            address: req.params.address
        }, 60 * 60, function (err, result, body, cache) {
            if(err){
                next(err);
            } else {
                res.send(body);
            }
        });
    });

    return router;
};
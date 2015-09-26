/* global module */
var RequestCaching = require('node-request-caching');
var rc = new RequestCaching();
var auth_id = process.env.smarty_streets_auth_id;
var auth_token = process.env.smarty_streets_auth_token;
module.exports = function (app, express) {
    var router = express.Router();

    router.get('/suggest/:address', function (req, res, next) {
        var url = 'https://autocomplete-api.smartystreets.com/suggest';
        rc.get(url, {
            'auth-id': auth_id,
            'auth-token': auth_token,
            prefix: req.params.address
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
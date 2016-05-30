'use strict';

exports.fileAnalyze = function(req, res) {
    res.json({'size':req.file.size});
};

var digo = require("digo");
exports.default = function () {
    digo.src("fixtures/*.sass", "fixtures/*.scss").pipe(require("../")).dest("_build");
}
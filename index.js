var sass = require("node-sass");

module.exports = function Sass(file, options, done) {
    options = Object.assign({
        file: file.srcPath,
        data: file.content,
        indentedSyntax: /^\.sass$/i.test(file.srcExt),
        sourceMap: file.sourceMap,
        omitSourceMapUrl: true,
        outFile: file.srcPath,
        outputStyle: "expanded"
    }, options);
    file.ext = ".css";
    if (!file.content) {
    	done();
    	return;
    }
    sass.render(options, function (error, result) {
        if (error) {
            file.error({
                plugin: Sass.name,
                error: error,
                message: error.message,
                fileName: error.file,
                line: error.line - 1,
                column: error.column - 1
            });
        } else {
            file.buffer = result.css;
            if (result.map) {
                const map = JSON.parse(result.map.toString());
                for (var i = 0; i < map.sources.length; i++) {
                    map.sources[i] = file.resolve(map.sources[i]);
                }
                file.applySourceMap(map);
            }
            file.dep(result.stats.includedFiles, {
                plugin: "sass",
                name: "@import"
            });
        }
        done();
    });
};

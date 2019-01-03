function HtmlReplacePlugin(options) {
	this.options = options;
}

HtmlReplacePlugin.prototype.apply = function(compiler) {
    var replacements = this.options.replacements;
    compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-after-html-processing', function(htmlPluginData, callback) {
            var htmlData = htmlPluginData.html;
            console.log('\n');
            for (var replacement of replacements) {
            	console.log("REPLACE: " + replacement.key + " =>  " + replacement.value);
            	htmlData = htmlData.replace(new RegExp('#{' + replacement.key + '}#','g'), replacement.value);
            }
            htmlPluginData.html = htmlData;
            console.log("HTML Replace done.");

			callback(null, htmlPluginData);
        });
    });
};

module.exports = HtmlReplacePlugin;
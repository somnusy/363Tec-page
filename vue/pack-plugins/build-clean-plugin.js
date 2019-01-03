const fs = require('fs');

function BuildCleanPlugin(options) {
	this.options = options;
}

BuildCleanPlugin.prototype.apply = function(compiler) {
    var deleteFolderRecursive = function(path) {
        var files = [];
        if( fs.existsSync(path) ) {
            files = fs.readdirSync(path);
            files.forEach(function(file,index){
                var curPath = path + "/" + file;
                if(fs.statSync(curPath).isDirectory()) { // recurse
                    deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };
    console.log("remove file/folder: " + JSON.stringify(this.options));
    for (var mPath of this.options.path) {
        console.log("remove file/folder: " + mPath);
        deleteFolderRecursive(mPath);
    }    
};

module.exports = BuildCleanPlugin;
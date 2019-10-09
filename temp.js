var {Storage} = require('@google-cloud/storage');
const storage = new Storage({
    keyFilename : "./key.json"
});
var shell = require('shelljs');
shell.config.maxdepth = 2;
shell.find(shell.pwd()).filter((file)=>{
    if(!file.match('node_modules')){
        if(file.match('CHANGELOG.md') != null){
            let metadata = file.match('CHANGELOG.md').input;
            console.log("path of metadata is: "+ metadata);
            await storage.bucket('sams-poc').upload(metadata);
         }
    }
});
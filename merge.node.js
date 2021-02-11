const mergeFiles = require('merge-files');

//var __dirname = "";

const output = __dirname + "/ndev.1.0.1.js";

const inputs = [
	__dirname + "/ndate.js",
	__dirname + "/nstring.js",
	__dirname + "/narray.js",
	__dirname + "/nurl.js",
];

// status: true or false
// const status = await mergeFiles(inputPathList, outputPath);
// or
console.log("__dirname",__dirname)
mergeFiles(inputs, output).then((status) => {
	// next
	console.log(status);
}).catch(err=>console.log("error",err))

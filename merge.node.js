const mergeFiles = require("merge-files");
const fs = require("fs");

const version = "1.0";

const files = fs.readdirSync("dist");
const num = files.length + 1;
const name = "/dist/ndev." + version + ".";

const output = __dirname + name + num + ".js";

const inputs = [
	__dirname + "/ndate.js",
	__dirname + "/nstring.js",
	__dirname + "/narray.js",
	__dirname + "/nurl.js",
	__dirname + "/nhtml.js",
];

// status: true or false
// const status = await mergeFiles(inputPathList, outputPath);
// or
console.log("__dirname", __dirname);
mergeFiles(inputs, output)
	.then((status) => {
		// next
		console.log(status);
	})
	.catch((err) => console.log("error", err));

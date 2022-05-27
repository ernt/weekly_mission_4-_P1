const fs = require("fs");

class Reader {



	static readJsonFile (name){
		// Part 1 Read json file ===========================
		const rawdata = fs.readFileSync(name);
		const explorers = JSON.parse(rawdata);
		return explorers;
	}



}
module.exports=Reader;
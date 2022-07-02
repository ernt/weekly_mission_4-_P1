const ExportService = require("../services/ExplorerService");
const FizzBuzzService = require("../services/FizzbuzzService");
const read = require("../utils/Reader");

class ExplorerController{

	static getExplorerByMission(mission){
		const explorers = read.readJsonFile("./data/explorers.json");
		const ExplorerbyMission = ExportService.module.filterByMission(explorers,mission);
		return ExplorerbyMission;
	}
	static getExplorersUsernamesByMission(mission){
		const explorers = read.readJsonFile("./data/explorers.json");
		const ExplorerUsername = ExportService.module.getExplorersUsernamesByMission(explorers,mission);
		return ExplorerUsername;
	}
	static getExplorersAmountByMission(mission){
		const explorers = read.readJsonFile("./data/explorers.json");
		const ExplorerAmount= ExportService.module.getAmountOfExplorersByMission(explorers,mission);
		return ExplorerAmount;
	}

	static  appliValidationNumber (score){

		const validationInNumber=FizzBuzzService.module.applyValidationInNumber(score);
		return validationInNumber;
	}
	static  getExplorersBystackinStacks(stack){
		const explorers = read.readJsonFile("./data/explorers.json");
		const Explorerstack= ExportService.module.getExplorerStack(explorers,stack);
		return Explorerstack;
	}

}
exports.module=ExplorerController;
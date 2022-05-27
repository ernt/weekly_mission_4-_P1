const ExplorerService = require("../../../lib/services/ExplorerService");
// Clase anterior con la que obtenemos los explorers
const read = require("../../../lib/utils/Reader");




describe("Test for ExplorerService", () => {
	test("1. Get the explorers by mission", () => {
		const explorers = read.readJsonFile("./data/explorers.json");
		const explorerservice = ExplorerService.module.filterByMission(explorers, "java");
		expect(explorers).toEqual(expect.arrayContaining(explorerservice));
		expect(explorerservice).not.toBeUndefined();
	});
});

describe("Test for ExplorerService", () => {
	test("2.  Get the quantity of explorers names in node", () => {
		const explorers = read.readJsonFile("./data/explorers.json");
		const explorernode= ExplorerService.module.filterByMission(explorers, "node");
		const explorerservice = ExplorerService.module.getAmountOfExplorersByMission(explorers, "node");
		expect(explorernode).toHaveLength(10);
		expect(explorernode).toHaveLength(explorerservice);
	});
});

describe("Test for ExplorerService", () => {
	test("3. Get the explorers usernames in Node", () => {
		const explorers = read.readJsonFile("./data/explorers.json");
		const explorerservice = ExplorerService.module.getExplorersUsernamesByMission(explorers, "node");
		expect(explorerservice).not.toBeUndefined();
      
	});
});
const Explorercontroler = require("../../../lib/controllers/ExplorerController");





describe("Test for Explorercontroler", () => {
	test("1. Get the explorers by mission", () => {
		const explorercontroler = Explorercontroler.module.getExplorerByMission("java");
		expect(explorercontroler).not.toBeUndefined();
	});
});

describe("Test for Explorercontroler", () => {
	test("2.  Get the quantity of explorers names in node", () => {
		const explorercontroler = Explorercontroler.module.getExplorersUsernamesByMission("node");
		expect(explorercontroler).toHaveLength(10);
	});
});

describe("Test for Explorercontroler", () => {
	test("3. Get the explorers usernames in Node", () => {
		const explorercontroler = Explorercontroler.module.getExplorersAmountByMission("node");
		expect(explorercontroler).not.toBeUndefined();
      
	});
});
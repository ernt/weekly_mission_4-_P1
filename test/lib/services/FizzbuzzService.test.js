const fizz = require("../../../lib/services/FizzbuzzService");


describe("Test for UserService", () => {
	test("1 Explorer con score 1",()=>{
		let explorer={name:"Explorer1",score:1};
		explorer=fizz.module.applyValidationInExplorer(explorer);
		expect(explorer.trick).toBe(1);
	});

	test("2 Explorer con score 3",()=>{
		let explorer={name:"Explorer3",score:3};
		explorer=fizz.module.applyValidationInExplorer(explorer);
		expect(explorer.trick).toBe("FIZZ");
	});
	test("3 Explorer con score 5",()=>{
		let explorer={name:"Explorer5",score:5};
		explorer=fizz.module.applyValidationInExplorer(explorer);
		expect(explorer.trick).toBe("BUZZ");
	});
	test("4 Explorer con score 15",()=>{
		let explorer={name:"Explorer15",score:15};
		explorer=fizz.module.applyValidationInExplorer(explorer);
		expect(explorer.trick).toBe("FIZZBUZZ");
	});
});

const fizz = require("../../../lib/services/FizzbuzzService");


describe("Test for FizzbuzzService", () => {
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

describe("Test for FizzbuzzServiceInNumber", () => {
	test("1) Score 1",()=>{
		const explorer=fizz.module.applyValidationInNumber(1);
		expect(explorer.trick).toBe(1);
		expect(explorer.score).toBe(1);
	});

	test("2) Score 3",()=>{
		const explorer=fizz.module.applyValidationInNumber(3);
		expect(explorer.score).toBe(3);
		expect(explorer.trick).toBe("FIZZ");
	});
	test("3) Score 5",()=>{
		const explorer=fizz.module.applyValidationInNumber(5);
		expect(explorer.score).toBe(5);
		expect(explorer.trick).toBe("BUZZ");
	});
	test("4) Score 15",()=>{
		const explorer=fizz.module.applyValidationInNumber(15);
		expect(explorer.score).toBe(15);
		expect(explorer.trick).toBe("FIZZBUZZ");
	});
});
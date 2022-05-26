const fizz = require("../../../app/lib/services/FizzbuzzService")


describe("Test for UserService", () => {
    test('1. Create a new user using the UserService', () => {
    const explorer1 = {name: "Explorer1", score: 1}
    const explorer3 = {name: "Explorer3", score: 3}
    const explorer5 = {name: "Explorer5", score: 5}
    const explorer15 = {name: "Explorer15", score: 15}
    const fiz1=fizz.module.applyValidationInExplorer(explorer1)
    const fiz3=fizz.module.applyValidationInExplorer(explorer3)
    const fiz5=fizz.module.applyValidationInExplorer(explorer5)
    const fiz15=fizz.module.applyValidationInExplorer(explorer15)
      expect(fiz1).toStrictEqual({name: "Explorer1", score: 1, trick: 1} );
      expect(fiz3).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"} );
      expect(fiz5).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"} );
      expect(fiz15).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"} );

      
    });
  })
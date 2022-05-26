
const read = require('../../../app/lib/utils/Reader')



describe("Test for Reader", () => {
    test('1.  Read json file', () => {
      const explorers = read.readJsonFile("explorers.json")
      expect(explorers).not.toBeUndefined();
      
    });
  })
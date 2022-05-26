
const read = require('../../../lib/utils/Reader')



describe("Test for Reader", () => {
    test('1.  Read json file', () => {
      const explorers = read.readJsonFile("./data/explorers.json")
      expect(explorers).not.toBeUndefined();
      
    });
  })
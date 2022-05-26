
const fizz = require("./lib/services/FizzbuzzService")
const ExplorerService = require('./lib/services/ExplorerService')
const read = require('../app/lib/utils/Reader')

const explorer = read.readJsonFile("explorers.json")
const services = ExplorerService.module.getExplorersUsernamesByMission(explorer,"node")

//const explorer1 = {name: "Explorer1", score: 1}
//const a = fizz.module.applyValidationInExplorer(explorer1)
console.log(explorer)
console.log(services)
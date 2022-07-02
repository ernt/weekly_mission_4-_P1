const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");
const app = express();
app.use(express.json());

const port = 3000;


app.get("/", (request, response) => {
	response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
	console.log(`FizzBuzz API in localhost:${port}`);
});

//localhost:3000/v1/explorers/:mission
app.get("/v1/explorers/:mission", (request, response) => {
	const mission =request.params.mission;
	const explorersInMission = ExplorerController.module.getExplorerByMission(mission);
	response.json(explorersInMission);
});
//localhost:3000/v1/explorers/amount/:mission
app.get("/v1/explorers/amount/:mission", (request, response) => {
	const mission =request.params.mission;
	const explorersAmountInMission= ExplorerController.module. getExplorersAmountByMission(mission);
	response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});
//localhost:3000/v1/explorers/usernames/:mission
app.get("/v1/explorers/usernames/:mission", (request, response) => {
	const mission =request.params.mission;
	const explorersUsernameInMission= ExplorerController.module. getExplorersUsernamesByMission(mission);
	response.json(explorersUsernameInMission);
});
//localhost:3000/v1/fizzbuzz/:score
app.get("/v1/fizzbuzz/:score", (request, response) => {
	const score = request.params.score;
	const explorerValidationNumber= ExplorerController.module.appliValidationNumber(score);
	response.json(explorerValidationNumber);
});

//localhost:3000/v1/explorers/stack/:stack
app.get("/v1/explorers/stack/:stack", (request, response) => {
	const stack = request.params.stack;
	const explorerstack= ExplorerController.module.getExplorersBystackinStacks(stack);
	response.json(explorerstack);
});

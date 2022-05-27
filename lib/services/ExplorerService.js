
class ExplorerService {

	static filterByMission(explorers,mission){
  
		const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
 
		return explorersInNode;

	}
	// Part 2: Get the quantity of explorers names in node
	static getAmountOfExplorersByMission(explorers,mission){
		const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        
		return explorersInNode.length;

	}
	// Part4: Get the explorer's usernames in Node
	static getExplorersUsernamesByMission(explorers,mission){
               
		const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
		const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
		return usernamesInNode;
	}






}

exports.module=ExplorerService;
var face=1;
var rando = function() {
  face = Math.floor(Math.random() * 6) + 1
  $('#cube').attr('class', 'show'+face);
};

class treeState{
	constructor(){
		this.numTree = 0;
		this.numTables = 0;
		this.numEvents = 0;
	}
	addTree(){
		this.numTree += 1;
	}
	addTable(){
		this.numTables += 1;
	}
	addEvent(){
		this.numEvents += 1;
	}

	getTreeID(){
		return this.numTree;
	}
	getTableID(){
		return this.numTables;
	}
	getEventID(){
		return this.numEvents;
	}
}

class tableTree {
	constructor(name, state){
		this.name = name;
		this.state = state;
		this.id = state.getTreeID();
		this.headTable = null;
		this.tables=[];
		state.addTree();
	}

	addTable(tb){
		if (this.tables.length < 1){
			this.headTable = tb;
		}
		this.tables.push(tb);
	}
}
class eventTable{
	constructor(name, state, tree){
		this.state = state;
		this.tree = tree;

		this.name = name;
		this.id = state.getTableID();
		this.events =[];

		state.addTable();
		tree.addTable(this);
	}

	addEvent(ev){
		this.events.push(ev);
	}

	getProbs(probInd){
		var eventsList = this.events;
		var probArr = [];

		eventsList.forEach(function(d){
			probArr.push(d.probs[probInd]);
		});

		return probArr;
	}
}
class event{
	constructor(name, state,table){
		this.state = state;
		this.table = table;

		this.name = name;
		this.id = state.getEventID();

		this.probs = [];

		this.nextTable = null;

		state.addEvent();
		table.addEvent(this);
	}
	// TODO: When a probability is changed update all other probabilities in the table such that they add up to 1 or prompt the user to change them themselves.
	addProb(probVal){
		// TODO: if a new conditional probability is added to the probability array, update all other events in the table such that their probability arrays are of the same length.
		this.probs.push(probVal);
	}
	editProb(probVal,probInd){
		this.probs[probInd] = probVal;
	}
	editNextTable(tb){
		this.nextTable = tb;
	}
}


class rollState{
	constructor(tr){
		this.tree = tr;
	}

	//ToDo: method RollTree to roll through a tree and call a rollinstacne object for each table and then progress to next table
	
}
class rollInstance{
	constructor(rs,tb){
		this.curTable = tb;
		this.conditions = [];
		this.eventsRolled = [];
	}

	rollEvent(probInd){
		var elID = 0;
		var randArr =[];
		var probs = this.curTable.getProbs(probInd);
		
		probs.forEach(function(d){
			var numEl = Math.round(d*100);
			for (var i = 0; i <= numEl; i++) {
				randArr.push(elID);
			}
			elID++;
		});

		var randomInd = Math.round(Math.random()*randArr.length);
		var eventInd = randArr[randomInd];
		return this.curTable.events[eventInd];
	}
}


// Testing Objects
var ts = new treeState();
var tabTr = new tableTree("test",ts);
var tab = new eventTable("test",ts,tabTr);
var ev = new event("testEvent",ts,tab);
var ev2 = new event("testEvent 2",ts,tab);

ev.addProb(0.4);
ev2.addProb(0.5);
ev2.editProb(0.6,0);

var rollSt = new rollState(tabTr);
var roller = new rollInstance(rollSt,rollSt.tree.headTable)
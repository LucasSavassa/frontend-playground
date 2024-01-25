class Inspecao() {
	#html;
	
	id = -1;
	state = 0;
	hasOpenIssue = false;
	hasClosedIssue = false;
	me = false;
	name = '';
	month = '';
	
	constructor(id, state, hasOpenIssue, hasClosedIssue, me, name, month) {
		this.id = id;
		this.state = state;
		this.hasOpenIssue = hasOpenIssue;
		this.hasClosedIssue = hasClosedIssue;
		this.me = me;
		this.name = name;
		this.month = month;
		
		this.#render();
	}
	
	update(id, state, hasOpenIssue, hasClosedIssue, me, name, month) {
		this.id = id;
		this.state = state;
		this.hasOpenIssue = hasOpenIssue;
		this.hasClosedIssue = hasClosedIssue;
		this.me = me;
		this.name = name;
		this.month = month;
		
		this.#render();	
	}
	
	#render() {
		return #html;
	}
}
class Inspecao {
	#id = -1;
	#state = 0;
	#hasOpenIssue = false;
	#hasClosedIssue = false;
	#me = false;
	#name = '';
	#month = '';
	
	constructor(id, state, hasOpenIssue, hasClosedIssue, me, name, month) {
		this.#id = id;
		this.#state = state;
		this.#hasOpenIssue = hasOpenIssue;
		this.#hasClosedIssue = hasClosedIssue;
		this.#me = me;
		this.#name = name.toLowerCase().trim();
		this.#month = month.toLowerCase().trim();
	}
	
	update(id, state, hasOpenIssue, hasClosedIssue, me, name, month) {
		this.#id = id;
		this.#state = state;
		this.#hasOpenIssue = hasOpenIssue;
		this.#hasClosedIssue = hasClosedIssue;
		this.#me = me;
		this.#name = name.toLowerCase().trim();
		this.#month = month.toLowerCase().trim();
	}
	
	getElement() {
		const inspecao = document.createElement('div');
		inspecao.id = `${this.#month}-${this.#name}`;
		inspecao.classList.add('inspecao');
		
		switch (this.#state) {
			case 1: inspecao.classList.add('esquecida'); break;
			case 2: inspecao.classList.add('agendada'); break;
			case 3: inspecao.classList.add('realizada'); break;
			default: break;
		}
		
		if (this.#me) inspecao.classList.add('para-mim');
		if (this.#hasOpenIssue || this.#hasClosedIssue) {
			const error = document.createElement('span')
			error.innerText = 'error';
			inspecao.appendChild(error);
		}
		if (this.#hasClosedIssue) inspecao.classList.add('com-apontamento','fechado');
		if (this.#hasOpenIssue) inspecao.classList.add('com-apontamento','aberto');
		
		return inspecao;
	}
}

class AgendaIndividual {
	#jan;
	#fev;
	#mar;
	#abr;
	#mai;
	#jun;
	#jul;
	#ago;
	#set;
	#out;
	#nov;
	#dez;
	#name;
	#me;
	
	constructor(name, me) {
		this.#name = name;
		this.#me = me;
	}
	
	updateMonth(month, inspecao) {
		switch(month) {
			case 'jan': this.#jan = inspecao; break;
			case 'fev': this.#fev = inspecao; break;
			case 'mar': this.#mar = inspecao; break;
			case 'abr': this.#abr = inspecao; break;
			case 'mai': this.#mai = inspecao; break;
			case 'jun': this.#jun = inspecao; break;
			case 'jul': this.#jul = inspecao; break;
			case 'ago': this.#ago = inspecao; break;
			case 'set': this.#set = inspecao; break;
			case 'out': this.#out = inspecao; break;
			case 'nov': this.#nov = inspecao; break;
			case 'dez': this.#dez = inspecao; break;
			default: break;
		}
	}
	
	
	
	getElement() {			
		const row = document.createElement('tr');
		row.id = name.toLowerCase().trim();
		
		const firstCell = document.createElement('td');
		firstCell.classList.add('row-header');
		if (this.#me) firstCell.classList.add('eu');		
		firstCell.innerText = name;
		
		firstCell.appendChild(this.#jan.getElement());
		firstCell.appendChild(this.#fev.getElement());
		firstCell.appendChild(this.#mar.getElement());
		firstCell.appendChild(this.#abr.getElement());
		firstCell.appendChild(this.#mai.getElement());
		firstCell.appendChild(this.#jun.getElement());
		firstCell.appendChild(this.#jul.getElement());
		firstCell.appendChild(this.#ago.getElement());
		firstCell.appendChild(this.#set.getElement());
		firstCell.appendChild(this.#out.getElement());
		firstCell.appendChild(this.#nov.getElement());
		firstCell.appendChild(this.#dez.getElement());
		row.appendChild(firstCell);
		
		return row;
	}
}

class Agenda {
	constructor() {
		
	}
	
	update() {
		
	}
	
	render() {
		const table = document.createElement('table');
		table.setAttribute('cellspacing', 0);
		
		let colgroup = this.#getColGroup();
		table.appendChild(colgroup);
		
		let tableHead = this.#getTableHead();		
		table.appendChild(tableHead);
		
		const tableBody = document.createElement('tbody');
		table.appendChild(tableBody);
	}
	
	#getColGroup() {		
		const colgroup = document.createElement('colgroup');
		const currentMonth = new Date().getMonth()
		
		const colJan = document.createElement('col');
		colJan.setAttribute('id', 'col-jan');
		if (currentMonth === 0) colJan.classList.add('mes-atual');
		colgroup.appendChild(colJan);
		
		const colFev = document.createElement('col');
		colFev.setAttribute('id', 'col-fev');
		if (currentMonth === 1) colFev.classList.add('mes-atual');
		colgroup.appendChild(colFev);
		
		const colMar = document.createElement('col');
		colMar.setAttribute('id', 'col-mar');
		if (currentMonth === 2) colMar.classList.add('mes-atual');
		colgroup.appendChild(colMar);
		
		const colAbr = document.createElement('col');
		colAbr.setAttribute('id', 'col-abr');
		if (currentMonth === 3) colAbr.classList.add('mes-atual');
		colgroup.appendChild(colAbr);
		
		const colMai = document.createElement('col');
		colMai.setAttribute('id', 'col-mai');
		if (currentMonth === 4) colMai.classList.add('mes-atual');
		colgroup.appendChild(colMai);
		
		const colJun = document.createElement('col');
		colJun.setAttribute('id', 'col-jun');
		if (currentMonth === 5) colJun.classList.add('mes-atual');
		colgroup.appendChild(colJun);
		
		const colJul = document.createElement('col');
		colJul.setAttribute('id', 'col-jul');
		if (currentMonth === 6) colJul.classList.add('mes-atual');
		colgroup.appendChild(colJul);
		
		const colAgo = document.createElement('col');
		colAgo.setAttribute('id', 'col-ago');
		if (currentMonth === 7) colAgo.classList.add('mes-atual');
		colgroup.appendChild(colAgo);
		
		const colSet = document.createElement('col');
		colSet.setAttribute('id', 'col-set');
		if (currentMonth === 8) colSet.classList.add('mes-atual');
		colgroup.appendChild(colSet);
		
		const colOut = document.createElement('col');
		colOut.setAttribute('id', 'col-out');
		if (currentMonth === 9) colOut.classList.add('mes-atual');
		colgroup.appendChild(colOut);
		
		const colNov = document.createElement('col');
		colNov.setAttribute('id', 'col-nov');
		if (currentMonth === 10) colNov.classList.add('mes-atual');
		colgroup.appendChild(colNov);
		
		const colDez = document.createElement('col');
		colDez.setAttribute('id', 'col-dez');
		if (currentMonth === 11) colDez.classList.add('mes-atual');
		colgroup.appendChild(colDez);
		
		return colgroup;
	}
	
	#getTableHead() {		
		const tableHead = document.createElement('thead');
		const tableHeadRow = document.createElement('tr');
		const emptyHeadCell = document.createElement('th');
		const tableHeadCellJan = document.createElement('th');
		tableHeadCellJan.innerText = 'jan';
		const tableHeadCellFev = document.createElement('th');
		tableHeadCellFev.innerText = 'fev';
		const tableHeadCellMar = document.createElement('th');
		tableHeadCellMar.innerText = 'mar';
		const tableHeadCellAbr = document.createElement('th');
		tableHeadCellAbr.innerText = 'abr';
		const tableHeadCellMai = document.createElement('th');
		tableHeadCellMai.innerText = 'mai';
		const tableHeadCellJun = document.createElement('th');
		tableHeadCellJun.innerText = 'jun';
		const tableHeadCellJul = document.createElement('th');
		tableHeadCellJul.innerText = 'jul';
		const tableHeadCellAgo = document.createElement('th');
		tableHeadCellAgo.innerText = 'ago';
		const tableHeadCellSet = document.createElement('th');
		tableHeadCellSet.innerText = 'set';
		const tableHeadCellOut = document.createElement('th');
		tableHeadCellOut.innerText = 'out';
		const tableHeadCellNov = document.createElement('th');
		tableHeadCellNov.innerText = 'nov';
		const tableHeadCellDez = document.createElement('th');
		tableHeadCellDez.innerText = 'dez';
		
		tableHeadRow.appendChild(emptyHeadCell);
		tableHeadRow.appendChild(tableHeadCellJan);
		tableHeadRow.appendChild(tableHeadCellFev);
		tableHeadRow.appendChild(tableHeadCellMar);
		tableHeadRow.appendChild(tableHeadCellAbr);
		tableHeadRow.appendChild(tableHeadCellMai);
		tableHeadRow.appendChild(tableHeadCellJun);
		tableHeadRow.appendChild(tableHeadCellJul);
		tableHeadRow.appendChild(tableHeadCellAgo);
		tableHeadRow.appendChild(tableHeadCellSet);
		tableHeadRow.appendChild(tableHeadCellOut);
		tableHeadRow.appendChild(tableHeadCellNov);
		tableHeadRow.appendChild(tableHeadCellDez);
		tableHead.appendChild(tableHeadRow);

		return tableHead;
	}
}
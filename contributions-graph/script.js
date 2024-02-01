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
		this.#jan = new Inspecao(1, 0, false, false, this.#me, this.#name, 'jan');
		this.#fev = new Inspecao(1, 0, false, false, this.#me, this.#name, 'fev');
		this.#mar = new Inspecao(1, 0, false, false, this.#me, this.#name, 'mar');
		this.#abr = new Inspecao(1, 0, false, false, this.#me, this.#name, 'abr');
		this.#mai = new Inspecao(1, 0, false, false, this.#me, this.#name, 'mai');
		this.#jun = new Inspecao(1, 0, false, false, this.#me, this.#name, 'jun');
		this.#jul = new Inspecao(1, 0, false, false, this.#me, this.#name, 'jul');
		this.#ago = new Inspecao(1, 0, false, false, this.#me, this.#name, 'ago');
		this.#set = new Inspecao(1, 0, false, false, this.#me, this.#name, 'set');
		this.#out = new Inspecao(1, 0, false, false, this.#me, this.#name, 'out');
		this.#nov = new Inspecao(1, 0, false, false, this.#me, this.#name, 'nov');
		this.#dez = new Inspecao(1, 0, false, false, this.#me, this.#name, 'dez');
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
		row.id = this.#name.toLowerCase().trim();
		
		const firstCell = document.createElement('td');
		firstCell.classList.add('row-header');
		if (this.#me) firstCell.classList.add('eu');		
		firstCell.innerText = this.#name;
		row.appendChild(firstCell);
		
		if(this.#jan) {
			const janCell = document.createElement('td');
			const inspecao = this.#jan.getElement();
			janCell.appendChild(inspecao);
			row.appendChild(janCell);
		}
		if(this.#fev) {
			const fevCell = document.createElement('td');
			const inspecao = this.#fev.getElement();
			fevCell.appendChild(inspecao);
			row.appendChild(fevCell);
		}
		if(this.#mar) {
			const marCell = document.createElement('td');
			const inspecao = this.#mar.getElement();
			marCell.appendChild(inspecao);
			row.appendChild(marCell);
		}
		if(this.#abr) {
			const abrCell = document.createElement('td');
			const inspecao = this.#abr.getElement();
			abrCell.appendChild(inspecao);
			row.appendChild(abrCell);
		}
		if(this.#mai) {
			const maiCell = document.createElement('td');
			const inspecao = this.#mai.getElement();
			maiCell.appendChild(inspecao);
			row.appendChild(maiCell);
		}
		if(this.#jun) {
			const junCell = document.createElement('td');
			const inspecao = this.#jun.getElement();
			junCell.appendChild(inspecao);
			row.appendChild(junCell);
		}
		if(this.#jul) {
			const julCell = document.createElement('td');
			const inspecao = this.#jul.getElement();
			julCell.appendChild(inspecao);
			row.appendChild(julCell);
		}
		if(this.#ago) {
			const agoCell = document.createElement('td');
			const inspecao = this.#ago.getElement();
			agoCell.appendChild(inspecao);
			row.appendChild(agoCell);
		}
		if(this.#set) {
			const setCell = document.createElement('td');
			const inspecao = this.#set.getElement();
			setCell.appendChild(inspecao);
			row.appendChild(setCell);
		}
		if(this.#out) {
			const outCell = document.createElement('td');
			const inspecao = this.#out.getElement();
			outCell.appendChild(inspecao);
			row.appendChild(outCell);
		}
		if(this.#nov) {
			const novCell = document.createElement('td');
			const inspecao = this.#nov.getElement();
			novCell.appendChild(inspecao);
			row.appendChild(novCell);
		}
		if(this.#dez) {
			const dezCell = document.createElement('td');
			const inspecao = this.#dez.getElement();
			dezCell.appendChild(inspecao);
			row.appendChild(dezCell);
		}
		
		return row;
	}
}

class Agenda {
	#agenda = {};
	
	constructor(myName, ...names) {		
		for (const name of names) {
			const me = name === myName;
			this.#agenda[name] = new AgendaIndividual(name, me);
		}
	}
	
	update(name, agendaIndividual) {
		this.#agenda[name] = agendaIndividual;
	}
	
	render() {
		const table = document.createElement('table');
		table.setAttribute('cellspacing', 0);
		
		let colgroup = this.#getColGroup();
		table.appendChild(colgroup);
		
		let tableHead = this.#getTableHead();		
		table.appendChild(tableHead);
		
		const tableBody = this.#getTableBody();
		table.appendChild(tableBody);
		
		const container = document.getElementById('contribution-graph')
		container.appendChild(table);
	}
	
	#getColGroup() {		
		const colgroup = document.createElement('colgroup');
		const currentMonth = new Date().getMonth()
		
		const emptyCol = document.createElement('col');
		colgroup.appendChild(emptyCol);
		
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
	
	#getTableBody() {
		const tableBody = document.createElement('tbody');
		
		for(const [key, value] of Object.entries(this.#agenda)) {
			const tableRow = value.getElement();			
			tableBody.appendChild(tableRow);
		}
		
		return tableBody;
	}
}
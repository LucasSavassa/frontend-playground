class Soulmate {
	#context;
	
	constructor() {
		const canvas = document.getElementsByTagName('canvas').item(0);
		if(!canvas) return console.log('Canvas not found');
		if(!canvas.getContext) return console.log('Canvas not supported');
		this.#context = canvas.getContext('2d');
	}
}

const soulmate = new Soulmate();
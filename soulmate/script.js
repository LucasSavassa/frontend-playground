class Soulmate {
	#context;
	
	constructor() {
		const canvas = document.getElementsByTagName('canvas').item(0);
		if(!canvas) return console.log('Canvas not found');
		if(!canvas.getContext) return console.log('Canvas not supported');
		this.#context = canvas.getContext('2d');
		this.#context.canvas.width = window.innerWidth;
		this.#context.canvas.height = window.innerHeight;
	}
	
	render() {
		this.#she();
		this.#he();
	}
	
	#she() {
		this.#context.beginPath();
		this.#context.fillStyle = "rgb(247 202 201)";
		this.#context.arc(185, 200, 15, 0, 2 * Math.PI, true);
		this.#context.fill();
	}
	
	#he() {
		this.#context.beginPath();
		this.#context.fillStyle = "rgb(145 168 209)";
		this.#context.arc(215, 200, 15, 0, 2 * Math.PI, true);
		this.#context.fill();	
	}
}

const soulmate = new Soulmate();
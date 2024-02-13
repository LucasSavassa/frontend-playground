class Point {
	#x;
	#y;
	
	constructor (x, y) {
		this.#x = x;
		this.#y = y;
	}
	
	get x() {
		return this.#x;
	}
	
	set x(value) {
		this.#x = value;
	}
	
	get y() {
		return this.#y;
	}
	
	set y(value) {
		this.#y = value;
	}
}

class Vector {
	#x;
	#y;
	#magnitude;
	
	constructor(x, y, magnitude) {
		this.#x = x;
		this.#y = y;
		this.#magnitude = magnitude;
	}
	
	get x() {
		return this.#x;
	}
	
	get y() {
		return this.#y;
	}
	
	get magnitude() {
		return this.#magnitude;
	}
}

class Bouncer {
	#context;
	#vector;
	#position;
	#radius;
	#color;
	
	constructor(context, vector, position, radius, color) {
		this.#context = context;
		this.#vector = vector;
		this.#position = position;
		this.#radius = radius;
		this.#color = color;
	}
	
	draw() {
		this.#context.beginPath();
		this.#context.fillStyle = this.#color;
		this.#context.arc(this.#position.x, this.#position.y, this.#radius, 0, 2 * Math.PI, true);
		this.#context.fill();
	}
	
	updatePosition() {
		this.#updateX();
		this.#updateY();
	}
	
	#updateX() {
		if(this.#position.x > window.innerWidth - (this.#radius * 0.75))
			this.#invertX();
		
		if(this.#position.x < 0 + (this.#radius * 0.75))
			this.#invertX();
		
		const incrementX = this.#vector.x * this.#vector.magnitude;
		this.#position.x += incrementX;
	}
	
	#invertX() {
		const x = this.#vector.x * -1;
		const y = this.#vector.y;
		const magnitude = this.#vector.magnitude;
		
		this.#vector = new Vector(x,y,magnitude);
	}
	
	#updateY() {
		if(this.#position.y > window.innerHeight - (this.#radius * 0.75))
			this.#invertY();
		
		if(this.#position.y < 0 + (this.#radius * 0.75))
			this.#invertY();
		
		const incrementY = this.#vector.y * this.#vector.magnitude;		
		this.#position.y += incrementY;
	}
	
	#invertY() {
		const x = this.#vector.x;
		const y = this.#vector.y * -1;
		const magnitude = this.#vector.magnitude;
		
		this.#vector = new Vector(x,y,magnitude);
	}
}

class She extends Bouncer {	
	constructor(context) {
		const vector = new Vector(1,2,4);
		const position = new Point(185, 200);
		const radius = 15;
		const color = "rgb(247, 202, 201)";
		super(context, vector, position, radius, color);
	}
}

class He extends Bouncer {	
	constructor(context) {
		const vector = new Vector(-1,-2,4);
		const position = new Point(215, 200);
		const radius = 15;
		const color = "rgb(145, 168, 209)";
		super(context, vector, position, radius, color);
	}
}

class Soulmate {
	#context;
	#she;
	#he;
	
	constructor() {
		const canvas = document.getElementsByTagName('canvas').item(0);
		if(!canvas) return console.log('Canvas not found');
		if(!canvas.getContext) return console.log('Canvas not supported');
		this.#context = canvas.getContext('2d');
		this.#context.canvas.width = window.innerWidth;
		this.#context.canvas.height = window.innerHeight;
		this.#she = new She(this.#context);
		this.#he = new He(this.#context);
	}
	
	draw() {
		this.#context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		
		this.#she.updatePosition();
		this.#she.draw();
		
		this.#he.updatePosition();
		this.#he.draw();
		
		requestAnimationFrame(this.draw.bind(this));
	}
}

const soulmate = new Soulmate();
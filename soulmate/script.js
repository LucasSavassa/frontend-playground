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
	#mechanicalEnergy = 50;
	#elasticWidth = 200;
	#mass = 1;
	
	#context;
	#vector;
	#position;
	#radius;
	#color;
	
	constructor(context, radius, color) {
		this.#context = context;
		this.#vector = this.#getRandomVector();
		this.#position = this.#getRandomPosition(context.canvas.width, context.canvas.height);
		this.#radius = radius;
		this.#color = color;
		this.#mass = radius / 15;
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
	
	#getRandomVector() {
		const randomSignX = Math.sign(Math.random() - 0.5);
		const randomX = (Math.random() / 2 + 0.5) * randomSignX;

		const randomSignY = Math.sign(Math.random() - 0.5);
		const randomY = (Math.random() / 2 + 0.5) * randomSignY;

		const magnitude = Math.sqrt(2 * this.#mechanicalEnergy / this.#mass);

		return new Vector(randomX, randomY, magnitude);
	}
	
	#getRandomPosition(width, height) {
		const randomX = Math.random() * width;
		const randomY = Math.random() * height;
		return new Point(randomX, randomY);
	}
	
	#updateX() {
		let velocity = this.#vector.magnitude;
		
		if(this.#hitHorizontalElasticBorder()) {
			velocity = this.#getHorizontalVelocityUnderElasticForce(velocity);
		}
		
		if(this.#position.x > window.innerWidth - this.#radius) {
			this.#invertX()
		}
		
		if(this.#position.x < 0 + (this.#radius * 0.75))
			this.#invertX();
		
		this.#position.x += this.#vector.x * velocity;
	}
	
	#hitHorizontalElasticBorder(position) {
		return this.#position.x >= window.innerWidth - this.#radius - this.#elasticWidth;
	}
	
	#getHorizontalVelocityUnderElasticForce(rawVelocity) {
		//logistic funcion
		const sign = Math.sign(this.#vector.x);
		const steepness = 0.1;
		let distance = (window.innerWidth - (this.#position.x + this.#radius)) * sign;
		if (Math.abs(distance) < 0.1) return 0.1 * sign;
		const denominator = 1 + Math.exp(-steepness * distance);
		const numerator = 20;
		const offset = -10;
		
		return Math.abs(numerator / denominator + offset);
	}
	
	#invertX() {
		const x = this.#vector.x * -1;
		const y = this.#vector.y;
		const magnitude = this.#vector.magnitude;
		
		this.#vector = new Vector(x,y,magnitude);
	}
	
	#updateY() {
		let velocity = Math.sqrt(2 * this.#mechanicalEnergy);
		
		if(this.#hitVerticalElasticBorder()) {
			velocity = this.#getVerticalVelocityUnderElasticForce(velocity);
		}
		
		if(this.#position.y > window.innerHeight - (this.#radius * 0.75))
			this.#invertY();
		
		if(this.#position.y < 0 + (this.#radius * 0.75))
			this.#invertY();
		
		this.#position.y += this.#vector.y * velocity;
	}
	
	#hitVerticalElasticBorder(position) {
		return this.#position.y >= window.innerHeight - this.#radius - this.#elasticWidth;
	}
	
	#getVerticalVelocityUnderElasticForce(rawVelocity) {
		//logistic funcion
		const sign = Math.sign(this.#vector.y);
		const steepness = 0.1;
		let distance = (window.innerHeight - (this.#position.y + this.#radius)) * sign;
		if (Math.abs(distance) < 0.1) return 0.1 * sign;
		const denominator = 1 + Math.exp(-steepness * distance);
		const numerator = 20;
		const offset = -10;
		
		return Math.abs(numerator / denominator + offset);
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
		const radius = 15;
		const color = "rgb(247, 202, 201)";
		super(context, radius, color);
	}
}

class He extends Bouncer {	
	constructor(context) {
		const radius = 30;
		const color = "rgb(145, 168, 209)";
		super(context, radius, color);
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
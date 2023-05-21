class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter methods
    get diameter() {
      return this.radius * 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter methods
    set diameter(value) {
      this.radius = value / 2;
    }
  
    set circumference(value) {
      this.radius = value / (2 * Math.PI);
    }
  
    set area(value) {
      this.radius = Math.sqrt(value / Math.PI);
    }
  }

  const circle = new Circle(5);
console.log(circle.diameter);       // Output: 10
console.log(circle.circumference);  // Output: 31.41592653589793
console.log(circle.area);           // Output: 78.53981633974483

circle.diameter = 8;
console.log(circle.radius);         // Output: 4

circle.circumference = 25;
console.log(circle.radius);         // Output: 3.978873577297383

circle.area = 50;
console.log(circle.radius);         // Output: 3.989422804014327

  
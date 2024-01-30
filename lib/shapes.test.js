const { Circle, Triangle, Square } = require('../lib/shapes');

describe('test for shapes', () => { 
  test('should pass if a red circle is rendered', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="red" />');
  });

  test('should pass if a blue triangle is rendered', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('should pass if a green square is rendered', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="green" />');
  });
})
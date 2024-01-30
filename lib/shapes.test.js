const { Circle, Triangle, Square } = require('../lib/shapes');

describe('test for shapes', () => { 
  test('should pass if a red circle is rendered', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="red" />');
  });
})
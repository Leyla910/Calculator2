let calculator = require('./calculator');

test('addition 1 + 2 should be equal 3', () => {
    expected(calculator.add(1,2).toBe(3));
});

test('substract 2 - 1 shoul be equal 1', () => {
    expected(calculator.substract(2,1).toBe(1));
});

test('multiply 1 * 3 should be equal 3', () => {
    expected(calculator.multiplier(1,3).toBe(3));
});

test('divide 4 / 2 should be equal 2', () => {
    expected(calculator.divider(4,2).toBe(2));
});
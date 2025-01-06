import { describe, it, expect, vi } from 'vitest';

var gas = require('gas-local')
var glib = gas.require('./src');

describe('generateRandomNumbers', () => {
    it('should generate a list of random numbers with exact row and col length', () => {
        const randomNumberList = glib.generateRandomNumbers(2, 3);
        const numRows = randomNumberList.length;
        const numCols = randomNumberList[0].length;

        expect(numRows).toBe(2);
        expect(numCols).toBe(3);
    });

    it.todo('should do something to be defined here', () => { // this will fail, because SpreadsheetApp needs to be mocked first
        let numbers = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];

        glib.changeNumberSheet(numbers);
        expect(true).toBe(true);
    });
})
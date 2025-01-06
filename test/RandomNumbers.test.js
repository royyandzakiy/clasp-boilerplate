import { describe, it, expect, vi } from 'vitest';

var gas = require('gas-local')
var glib = gas.require('./src');

describe('generateRandomNumbers', () => {
    it.todo('should do something to be defined here', () => {
        glib.generateRandomNumbers(); // this will fail, because SpreadsheetApp needs to be mocked first
        expect(true).toBe(true);
    });
})
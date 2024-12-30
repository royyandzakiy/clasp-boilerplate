import { describe, it, expect, vi } from 'vitest';

var gas = require('gas-local')
var glib = gas.require('./src');

describe('generateRandomNumbers', () => {
    it.todo('should return a string in the correct format', () => {
        glib.generateRandomNumbers();
        expect(true).toBe(true);
    });
})
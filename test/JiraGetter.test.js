import { describe, it, expect, vi } from 'vitest';

var gas = require('gas-local')

const mockedResponse = {
  "self": "https://company.atlassian.net/rest/api/2/issue/349993",
  "key": "SIDH-123",
  "fields": {
    "subtasks": [],
    "summary": "Experiment"
  }
};

var defaultMock = gas.globalMockDefault;

var JiraGetterMock = {
  __proto__: defaultMock,
  Utilities: {
    base64Encode: vi.fn().mockReturnValue("1234")
  },
  UrlFetchApp: {
    fetch: vi.fn().mockReturnValue({
      getContentText: () => JSON.stringify(mockedResponse),
    }),
  },
};

var glib = gas.require('./src', JiraGetterMock); // registers the defined mock functions

describe('JiraGetter', () => {
    it('should return formatted project data based on the mocked API response', () => {
        const result = glib.getJiraProjectData('SIDH-123');
        expect(result).toMatchObject({
          key: "SIDH-123",
          summary: "Experiment",
        });
    });
})
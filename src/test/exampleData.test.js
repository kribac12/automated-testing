import getExampleData from "../exampleData";

// Create mock functions and set up global mocks
const TEST_VALUE = 3;

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([
    { id: 1, title: "Example 1" },
    { id: 2, title: "Example 2" },
    { id: 3, title: "Example 3" },
    { id: 4, title: "Example 4" },
    { id: 5, title: "Example 5" },
  ]),
});

global.fetch = mockFetchSuccess;

// Test cases
describe("getExampleData", () => {
  it("returns the correct maximum of items", async () => {
    const data = await getExampleData(TEST_VALUE);
    expect(data.length).toBeLessThanOrEqual(TEST_VALUE);
  });
});

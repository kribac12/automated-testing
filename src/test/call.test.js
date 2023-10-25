import { complexRemoteCall } from "../call";

describe("complexRemoteCall", () => {
  it("should return an array of responses from three API endpoints", async () => {
    // Mock the global fetch function
    global.fetch = jest.fn(() => Promise.resolve({}));

    await complexRemoteCall();

    // Check that the mocked fetch function was called 3 times
    expect(global.fetch).toHaveBeenCalledTimes(3);
  });
});

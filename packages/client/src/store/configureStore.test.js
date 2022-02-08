import configureStore from "store/configureStore";
import { createStore, applyMiddleware, compose } from "redux";

test("store/configureStore", () => {
  it("should make HTTP call", async () => {
    const store = configureStore();
  });
});
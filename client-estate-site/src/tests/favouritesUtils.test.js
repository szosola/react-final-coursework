import { test, expect } from "@jest/globals";
import { addFavouriteId, removeFavouriteId } from "../utils/favouritesUtils";

test("adds a favourite id when it does not exist", () => {
  const result = addFavouriteId([], "prop1");
  expect(result).toEqual(["prop1"]);
});

test("removes a favourite id", () => {
  const result = removeFavouriteId(["prop1", "prop2"], "prop1");
  expect(result).toEqual(["prop2"]);
});
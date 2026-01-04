import { test, expect } from "@jest/globals";
import { filterProperties } from "../utils/filterProperties";

const sample = [
  {
    id: "prop1",
    type: "House",
    bedrooms: 3,
    price: 500000,
    location: "Orpington BR6",
    added: { month: "September", day: 14, year: 2022 },
  },
  {
    id: "prop2",
    type: "Flat",
    bedrooms: 1,
    price: 250000,
    location: "Bromley BR1",
    added: { month: "August", day: 20, year: 2022 },
  },
  {
    id: "prop3",
    type: "House",
    bedrooms: 5,
    price: 1200000,
    location: "Beckenham BR3",
    added: { month: "December", day: 1, year: 2022 },
  },
];

test("shows all properties when criteria is 'Any' and empty", () => {
  const criteria = {
    type: "Any",
    minPrice: null,
    maxPrice: null,
    minBeds: null,
    maxBeds: null,
    dateFrom: null,
    dateTo: null,
    postcode: "Any",
  };

  const result = filterProperties(sample, criteria);
  expect(result).toHaveLength(3);
});

test("filters by property type", () => {
  const criteria = {
    type: "Flat",
    minPrice: null,
    maxPrice: null,
    minBeds: null,
    maxBeds: null,
    dateFrom: null,
    dateTo: null,
    postcode: "Any",
  };

  const result = filterProperties(sample, criteria);
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("prop2");
});

test("filters by price range", () => {
  const criteria = {
    type: "Any",
    minPrice: 300000,
    maxPrice: 600000,
    minBeds: null,
    maxBeds: null,
    dateFrom: null,
    dateTo: null,
    postcode: "Any",
  };

  const result = filterProperties(sample, criteria);
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("prop1");
});
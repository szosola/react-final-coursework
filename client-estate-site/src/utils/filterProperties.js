export function filterProperties(properties, criteria) {
  return properties.filter((property) => {
    // 1) Type
    if (
      criteria.type &&
      criteria.type !== "Any" &&
      property.type !== criteria.type
    ) {
      return false;
    }

    // 2) Price
    if (criteria.minPrice !== null && property.price < criteria.minPrice) {
      return false;
    }
    if (criteria.maxPrice !== null && property.price > criteria.maxPrice) {
      return false;
    }

    // 3) Bedrooms
    if (criteria.minBeds !== null && property.bedrooms < criteria.minBeds) {
      return false;
    }
    if (criteria.maxBeds !== null && property.bedrooms > criteria.maxBeds) {
      return false;
    }

    // 4) Date (convert your JSON month/day/year into a real Date)
    if (criteria.dateFrom || criteria.dateTo) {
      const propertyDate = new Date(
        `${property.added.month} ${property.added.day}, ${property.added.year}`
      );

      if (criteria.dateFrom && propertyDate < criteria.dateFrom) {
        return false;
      }

      if (criteria.dateTo && propertyDate > criteria.dateTo) {
        return false;
      }
    }

    // 5) Postcode area
    if (criteria.postcode && criteria.postcode !== "Any") {
      const locationText = property.location.toLowerCase();
      const postcodeText = criteria.postcode.toLowerCase();

      if (!locationText.includes(postcodeText)) {
        return false;
      }
    }

    return true;
  });
}
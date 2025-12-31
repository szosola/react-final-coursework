import { useState } from "react";
import { DropdownList, NumberPicker, DatePicker, Combobox } from "react-widgets";

const POSTCODE_OPTIONS = ["Any", "BR1", "BR3", "BR5", "BR6", "BR7", "DA15"];
const TYPE_OPTIONS = ["Any", "House", "Flat"];

function SearchForm() {
  const [criteria, setCriteria] = useState({
    type: "Any",
    minPrice: null,
    maxPrice: null,
    minBeds: null,
    maxBeds: null,
    dateFrom: null,
    dateTo: null,
    postcode: "Any",
  });

  return (
    <form>
      <h3>Search Properties</h3>

      {/* Type */}
      <label>Property Type</label>
      <DropdownList
        data={TYPE_OPTIONS}
        value={criteria.type}
        onChange={(value) => setCriteria({ ...criteria, type: value })}
      />

      {/* Price */}
      <label>Min Price</label>
      <NumberPicker
        value={criteria.minPrice}
        onChange={(value) => setCriteria({ ...criteria, minPrice: value })}
        min={0}
      />

      <label>Max Price</label>
      <NumberPicker
        value={criteria.maxPrice}
        onChange={(value) => setCriteria({ ...criteria, maxPrice: value })}
        min={0}
      />

      {/* Bedrooms */}
      <label>Min Bedrooms</label>
      <NumberPicker
        value={criteria.minBeds}
        onChange={(value) => setCriteria({ ...criteria, minBeds: value })}
        min={0}
      />

      <label>Max Bedrooms</label>
      <NumberPicker
        value={criteria.maxBeds}
        onChange={(value) => setCriteria({ ...criteria, maxBeds: value })}
        min={0}
      />

      {/* Dates */}
      <label>Date Added From</label>
      <DatePicker
        value={criteria.dateFrom}
        onChange={(value) => setCriteria({ ...criteria, dateFrom: value })}
        placeholder="Select date"
      />

      <label>Date Added To</label>
      <DatePicker
        value={criteria.dateTo}
        onChange={(value) => setCriteria({ ...criteria, dateTo: value })}
        placeholder="Select date"
      />

      {/* Postcode */}
      <label>Postcode Area</label>
      <Combobox
        data={POSTCODE_OPTIONS}
        value={criteria.postcode}
        onChange={(value) => setCriteria({ ...criteria, postcode: value })}
      />
    </form>
  );
}

export default SearchForm;
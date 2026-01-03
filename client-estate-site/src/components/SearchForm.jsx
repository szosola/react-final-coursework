import { DropdownList, NumberPicker, DatePicker, Combobox } from "react-widgets";
import "./SearchForm.css";

const POSTCODE_OPTIONS = ["Any", "BR1", "BR3", "BR5", "BR6", "BR7", "DA15"];
const TYPE_OPTIONS = ["Any", "House", "Flat"];

function SearchForm({ criteria, setCriteria }) {
  function handleReset() {
    setCriteria({
      type: "Any",
      minPrice: null,
      maxPrice: null,
      minBeds: null,
      maxBeds: null,
      dateFrom: null,
      dateTo: null,
      postcode: "Any",
    });
  }

  return (
    <form className="search-form">
      <h3>Search Properties</h3>

      {/* Type */}
      <div className="form-row">
        <label>Property Type</label>
        <DropdownList
          data={TYPE_OPTIONS}
          value={criteria.type}
          onChange={(value) => setCriteria({ ...criteria, type: value })}
        />
      </div>

      {/* Price */}
      <div className="form-row">
        <label>Min Price</label>
        <NumberPicker
          value={criteria.minPrice}
          onChange={(value) => setCriteria({ ...criteria, minPrice: value })}
          min={0}
        />
      </div>

      <div className="form-row">
        <label>Max Price</label>
        <NumberPicker
          value={criteria.maxPrice}
          onChange={(value) => setCriteria({ ...criteria, maxPrice: value })}
          min={0}
        />
      </div>

      {/* Bedrooms */}
      <div className="form-row">
        <label>Min Bedrooms</label>
        <NumberPicker
          value={criteria.minBeds}
          onChange={(value) => setCriteria({ ...criteria, minBeds: value })}
          min={0}
        />
      </div>

      <div className="form-row">
        <label>Max Bedrooms</label>
        <NumberPicker
          value={criteria.maxBeds}
          onChange={(value) => setCriteria({ ...criteria, maxBeds: value })}
          min={0}
        />
      </div>

      {/* Dates */}
      <div className="form-row">
        <label>Date Added From</label>
        <DatePicker
          value={criteria.dateFrom}
          onChange={(value) => setCriteria({ ...criteria, dateFrom: value })}
          placeholder="Select date"
        />
      </div>

      <div className="form-row">
        <label>Date Added To</label>
        <DatePicker
          value={criteria.dateTo}
          onChange={(value) => setCriteria({ ...criteria, dateTo: value })}
          placeholder="Select date"
        />
      </div>

      {/* Postcode */}
      <div className="form-row">
        <label>Postcode Area</label>
        <Combobox
          data={POSTCODE_OPTIONS}
          value={criteria.postcode}
          onChange={(value) => setCriteria({ ...criteria, postcode: value })}
        />
      </div>

      <div className="form-actions">
        <button type="button" className="reset-btn" onClick={handleReset}>
          Reset filters
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
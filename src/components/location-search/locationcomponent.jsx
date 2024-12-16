import { Search } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './locationcomponent.css';

export default function Location() {
  const [start, setstart] = useState('');
  const [end, setend] = useState('');
  const [city, setcity] = useState('');
  let today;
  let Navigate = useNavigate();

  // Handle Start Date change
  function Handlestart(e) {
    setstart(e.target.value);
  }

  // Handle End Date change
  function HandleEnd(e) {
    setend(e.target.value);
  }

  // Handle City selection
  function handleCity(e) {
    setcity(e.target.value);
    console.log(e.target.value);
  }

  // Handle Search button click
  function handleSearch() {
    today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

    // Validate that Start Date is not in the past
    if (start && start < today) {
      alert('Start date cannot be in the past.');
      return;
    }

    // Validate that End Date is not in the past
    if (end && end < today) {
      alert('End date cannot be in the past.');
      return;
    }

    // Validate that Start Date is before End Date
    if (start && end && start > end) {
      alert('Start date must be before End date.');
      return;
    }

    // Validate that a city is selected
    if (city === '') {
      alert('Please select a city.');
      return;
    }

    // Validate that Start Date is selected
    if (start === '') {
      alert('Please select a start date.');
      return;
    }

    // Validate that End Date is selected
    if (end === '') {
      alert('Please select an end date.');
      return;
    }

    // If all validations pass, navigate to the rent page
    Navigate("/rent");
  }

  return (
    <section className="location-top-section">
      <div className="location-left-div">
        <div className="location-left-div-text">
          <p>Quick Search</p>
        </div>
        <div className="location-left-div-cities">
          <dl>
            <dt>Your Location</dt>
            <dd>
              <select name="city" id="city" onChange={handleCity}>
                <option value="">Select</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Delhi">Delhi</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Noida">Noida</option>
                <option value="Jammu">Jammu</option>
              </select>
            </dd>
          </dl>
        </div>
        <div className="location-left-div-start-date">
          <dl>
            <dt>Start Date</dt>
            <dd>
              <input
                type="date"
                name="Start"
                id="Start"
                onBlur={Handlestart}
                min={today} // Prevent selecting a start date in the past
                required
              />
            </dd>
          </dl>
        </div>
        <div className="location-left-div-end-date">
          <dl>
            <dt>End Date</dt>
            <dd>
              <input
                type="date"
                name="End"
                id="End"
                onBlur={HandleEnd}
                min={today} // Prevent selecting an end date in the past
              />
            </dd>
          </dl>
        </div>
        <div className="location-left-div-search-icon">
          <span onClick={handleSearch}>
            <Search style={{ width: '50px', height: '2rem' }} className="location-search" />
          </span>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({ date, time, guest, occasion });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.dispatch({ type: 'UPDATE_TIMES', payload: new Date(selectedDate) });
};

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* date */}
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={handleDateChange}
                type="date"
                required
              />
            </div>

            {/* time */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={props.availableTimes.length === 0}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.map((availableTime) => {
                  return <option key={availableTime}>{availableTime}</option>;
                })}
              </select>
            </div>

            {/* guest */}
            <div>
              <label htmlFor="book-guest">Number of Guests:</label>
              <input
                id="book-guest"
                value={guest}
                min="1"
                onChange={(e) => setGuest(e.target.value)}
                type="number"
                required
              />
            </div>

            {/* occasion */}
            <div>
              <label htmlFor="book-occasion">Choose Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Regular Dinner">Regular Dinner</option>
              </select>
            </div>

            {/* Submit */}
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value="Make your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;

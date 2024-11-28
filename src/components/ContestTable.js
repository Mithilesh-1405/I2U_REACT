import React from 'react';
import '../styling/ContestTable.scss';

const ContestTable = ({ imageUrl }) => {
  const isValidDate = (dateStr) => {
    // Convert date strings to a consistent format
    const cleanDate = dateStr.toLowerCase().replace('th', '').replace('st', '').replace('nd', '').replace('rd', '');
    const date = new Date(cleanDate);
    return !isNaN(date.getTime()) ? date : null;
  };

  const filterCurrentAndFutureEvents = (events) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events.filter(event => {
      // Skip events with "Traditionally" or "Typically" in their dates
      if (event.date.includes('Traditionally') || event.date.includes('Typically')) {
        return true;
      }

      const eventDate = isValidDate(event.date);
      if (!eventDate) return true; // Keep events with unparseable dates

      return eventDate >= today;
    });
  };

  const filteredEvents = imageUrl ? filterCurrentAndFutureEvents(imageUrl) : [];

  return (
    <div className="contest-table-container">
      <h2>Upcoming Contests</h2>
      <div className="table-responsive">
        <table className="contest-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Website</th>
              <th>Date</th>
              <th>Location</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((contest, index) => (
              <tr key={index}>
                <td data-label="Name">{contest.name}</td>
                <td data-label="Website">
                  <a href={contest.website} target="_blank" rel="noopener noreferrer">
                    {contest.website}
                  </a>
                </td>
                <td data-label="Date">{contest.date}</td>
                <td data-label="Location">{contest.location}</td>
                <td data-label="Image">
                  <img src={contest.url} alt={contest.name} className="contest-image" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContestTable;

import { useEffect, useState } from 'react';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h1>Events in Sydney</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h2>{event.title}</h2>
              <p>{event.date} - {event.time}</p>
              <p>{event.location}</p>
              <a href={event.url} target="_blank" rel="noopener noreferrer">Get Tickets</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventsList;

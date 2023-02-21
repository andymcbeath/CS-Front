import React, { useState, useEffect } from 'react';
import ApiCalendar from 'react-google-calendar-api';

const config = {
  "clientId": "shit",
  "apiKey": "shit",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
};

const apiCalendar = new ApiCalendar(config);

export default function Calendar() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        await apiCalendar.handleClientLoad();
        const response = await apiCalendar.listUpcomingEvents(10);
        const events = response.result.items.map(event => {
          return {
            id: event.id,
            title: event.summary,
            start: event.start.dateTime || event.start.date,
            end: event.end.dateTime || event.end.date,
            description: event.description
          }
        });
        setEventList(events);
      } catch (error) {
        console.error('Error loading events', error);
      }
    };
    loadEvents();
  }, []);

  return (
    <div>
      {eventList.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Start Time: {event.start}</p>
          <p>End Time: {event.end}</p>
        </div>
      ))}
    </div>
  );
}

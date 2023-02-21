import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from 'react-google-calendar-api';

const localizer = momentLocalizer(moment);

function CalendarEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const calendarEvents = await getEvents({
          calendarId: 'caughtsteelinband@gmail.com',
          timeMin: moment().toISOString(),
          showDeleted: false,
          singleEvents: true,
          orderBy: 'startTime',
          maxResults: 30,
        });
        setEvents(calendarEvents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default CalendarEvents;

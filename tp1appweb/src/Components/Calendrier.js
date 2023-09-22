import { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

class Calendrier extends Component {
    render() {
        return (
          <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={[
                { title: 'custom TP1-1', date: '2023-09-28' },
                { title: 'custom TP1-2', date: '2023-09-28' }
              ]}
          />
        )
    }
}

export default Calendrier;
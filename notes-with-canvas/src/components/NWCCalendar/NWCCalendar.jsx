import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const MyCalendar = withDragAndDrop(Calendar);

class NWCCalendar extends Component {
  //temp events
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(2, "hours"),
        title: "Example event",
      },
      {
        start: moment().add(1, "days"),
        end: moment().add(1, "days"),
        title: "Example event",
      },
      {
        start: moment().add(3, "days"),
        end: moment().add(3, "days"),
        title: "Example event",
      },
      {
        start: moment().subtract(10, "days"),
        end: moment().subtract(10, "days"),
        title: "Example event",
      },
      {
        start: moment().subtract(19, "days"),
        end: moment().subtract(19, "days"),
        title: "Example event",
      },
      {
        start: moment().subtract(13, "days"),
        end: moment().subtract(13, "days"),
        title: "Example event",
      },
      {
        start: moment().subtract(13, "days"),
        end: moment().subtract(13, "days"),
        title: "Example event",
      },
    ],
  };

  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <MyCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "50rem" }}
        />
      </div>
    );
  }
}

export default NWCCalendar;
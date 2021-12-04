import React from "react";
import ApiCalendar from "react-google-calendar-api";

export default class PlanningComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       sign: ApiCalendar.sign
    };

     this.signUpdate = this.signUpdate.bind(this);
     ApiCalendar.onLoad(() => {
       ApiCalendar.listenSign(this.signUpdate);
     });

    this.handleItemClick = this.handleItemClick.bind(this);
  }

   signUpdate(sign) {
     this.setState({ sign }, () => console.log(this.state.sign));
   }

  handleItemClick(event, name) {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick();
      console.log("logged in");
    } else if (name === "sign-out") {
      ApiCalendar.handleSignoutClick();
      console.log("logged out");
    }
  }

  async getUserInfo() {
    if (ApiCalendar.sign) {
      const response = await ApiCalendar.getBasicUserProfile();
      console.log(response);
    }
  }

  listUpcomingEvents() {
    if (ApiCalendar.sign)
      ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
        console.log("upcomsing events", result.items);
      });
  }

  listAllEvents() {
    if (ApiCalendar.sign)
      ApiCalendar.listEvents({
         timeMin: new Date().toISOString(),
         timeMax: new Date().addDays(10).toISOString(),
        maxResults: 10,
        orderBy: "updated"
      }).then(({ result }) => {
        console.log(result.items);
      });
  }

  updateEvent() {
    const eId = "7eppmkfbhi4gtvvapv9hvej1lm";
    const event = {
      summary: "changed name to meet30june for demo purposes"
    };
    ApiCalendar.updateEvent(event, eId).then((res) => {
      console.log(res);
    });

    ApiCalendar.getEvent(eId).then(console.log);
  }

  createEventFromNow() {
    const eventFromNow = {
      summary: "Poc Dev From Now",
      time: 180
    };

    ApiCalendar.createEventFromNow(eventFromNow)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  createEvent() {
    let stDate = "2021-12-03T12:00:00+05:30";
    let endDate = "2021-12-03T15:00:00+05:30";
    const event = {
      summary: "new event created",
      description: "demo of create event function",
      start: {
        dateTime: stDate
      },
      end: {
        dateTime: endDate
      }
    };

    ApiCalendar.createEvent(event)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <button onClick={(e) => this.handleItemClick(e, "sign-in")}>
          sign-in
        </button>
        <button onClick={(e) => this.handleItemClick(e, "sign-out")}>
          sign-out
        </button>
        <button onClick={(e) => this.getUserInfo()}>get user info</button>
        <button onClick={(e) => this.listUpcomingEvents()}>
          list upcoming events
        </button>
        <button onClick={(e) => this.listAllEvents()}>list all events</button>
        <button onClick={(e) => this.updateEvent()}>update an Event</button>
        <button onClick={(e) => this.createEventFromNow()}>
          create an Event from now
        </button>
        <button onClick={(e) => this.createEvent()}>create an Event</button>
        { <div>
            {`${this.state.sign ? "true" : "false"}`}
        </div>}
      </>
    );
  }
}

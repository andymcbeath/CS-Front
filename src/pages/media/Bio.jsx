import Card from "react-bootstrap/Card"

export default function Bio () {
  return(
    <Card className="Bio shadow d-flex flex-column align-items-center" style={{width: "75%", height: "fit-content"}}>
    <h1>Bio</h1>
    <p>Alumni of the University of Illinois School of Music, Caught Steelin’ is a Chicago-based steel band. Combining our love of the steel pan (the national instrument of Trinidad and Tobago) with our lifelong baseball fandom, we play a wide range of musical styles including traditional calypso, latin jazz, pop, rock. We play for a variety of events and venues, from baseball stadiums to weddings and everything in between! Click on our booking link to book us today! </p>
  </Card>
  )
}
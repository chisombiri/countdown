import React, { useEffect, useState } from 'react';
import intervalToDuration from 'date-fns/intervalToDuration'; //date-fns interval method
import differenceInDays from 'date-fns/differenceInDays'; //importing method to calculate full day difference
import './countdown.css'; //stylesheet in same directory
import { FaCalendarWeek } from "react-icons/fa"; //react font awesome icon for calender

//Using functional component with hooks
const Countdown = () => {

  //using method to get the current year 2022
  const thisYear = new Date().getFullYear()

  //using the date object to get his birthday this year(assumed date)
  const ericdayThisYear = new Date(thisYear, 10, 14, 0, 0)

  //using the date object to get his birthday next year(assumed date)
  const ericdayNextYear = new Date(thisYear + 1, 10, 14, 0, 0)

  //usestate to get updated date object state
  const [ericday, setEricDay] = useState({})

  //trigger this when page loads or re-renders, or when state or prop changes.
  useEffect(() => {
    //setting interval with 1 second as the time parameter
    const interval = setInterval(() => {
      const today = new Date()

      //using the difference in days method to get the number of full day periods between the given dates.
      const daysDifference = differenceInDays(
        today,
        ericdayThisYear
      )

      //if this difference is an negative value, it means his birthday is yet to come this year
      if (daysDifference <= 0) {
        //using the interval to get the complete date interval object
        const result = intervalToDuration({
          start: today,
          end: ericdayThisYear
        });

        //set the eric day state to this result if above conditions met
        setEricDay(result)
      //if the difference is a positive value it means current date has passed his birthday this year 
      } else {
        //using the interval to get the complete date interval object
        const result = intervalToDuration({
          start: today,
          end: ericdayNextYear
        });

        //else set the eric day state to this result if above conditions met
        setEricDay(result)
      }

    }, 1000);

    //interval clear
    return () => clearInterval(interval);

  })

  //jsx rendered on the page
  return (
    <main>
      {Object.keys(ericday).length === 0 && ericday.constructor === Object
        ?
        <p>Coming up...</p>
        :
        ericday.days === 0 && ericday.months === 0
          ?
          <h2>Happy birthday Mr Eric! 🥳🍾</h2>
          :
          (
            <section className="timer">
              <div>
                <FaCalendarWeek className='calender-icon' />
                <h2>We're counting down to Mr Eric's Birthday!</h2>
              </div>
              <div>
                {/* We now render the month, date, hours, minutes and seconds from the ericday state */}
                <section>
                    <p>{ericday.months}</p>
                    <p>
                      <small>Months</small>
                    </p>
                </section>
                <span>:</span>
                <section>
                    <p>{ericday.days}</p>
                    <p>
                      <small>Days</small>
                    </p>
                </section>
                  <span>:</span>
                <section>
                    <p>{ericday.hours} </p>
                    <p>
                      <small>Hours</small>
                    </p>
                </section>
                  <span>:</span>
                <section>
                    <p>{ericday.minutes} </p>
                    <p>
                      <small>Minutes</small>
                    </p>
                </section>
                  <span>:</span>
                <section>
                    <p>{ericday.seconds} </p>
                    <p>
                      <small>Seconds</small>
                    </p>
                </section>
              </div>
            </section>
          )
      }
    </main>
  )
}

export default Countdown;
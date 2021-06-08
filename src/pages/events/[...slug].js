import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../../dummy-data';
import { ErrorAlert, EventList, EventResult } from '../../components';
import Button from '../../components/UI/Button/Button';

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <div className="center">
        <ErrorAlert>
          <p className="center">Loading</p>;
        </ErrorAlert>
        <Button link="/events">Show All Event</Button>
      </div>
    );
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    filterData.length === 0 ||
    filteredMonth > 2030 ||
    filteredYear < 2019
  ) {
    return (
      <div className="center">
        <ErrorAlert>
          <p className="center">Invalid. Please adjust your value!</p>;
        </ErrorAlert>
        <Button link="/events">Show All Event</Button>
      </div>
    );
  }

  // console.log(numYear, numMonth);

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>
          <p className="center">No Event found</p>;
        </ErrorAlert>
        <Button link="/events">Show All Event</Button>
      </div>
    );
  }

  const date = [numYear, numMonth];

  return (
    <div>
      <EventResult date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;

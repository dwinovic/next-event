import React from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../../dummy-data';
import { EventList, EventSearch } from '../../components';

const index = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findSearchEvent = (year, month) => {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  };

  return (
    <>
      <EventSearch onSearch={findSearchEvent} />
      <EventList items={events} />
    </>
  );
};

export default index;

import { EventList } from '../components';
import DUMMYDATA, { getAllEvents } from '../../dummy-data';

const HomePage = () => {
  const featuredEvents = getAllEvents();

  return (
    <div>
      <h1>The Home Page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

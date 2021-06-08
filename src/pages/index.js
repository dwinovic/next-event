import { getFeaturedEvents } from '../../dummy-data';
import { EventList } from '../components';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

import EventItem from '../EventItem';
import styles from './EventList.module.css';

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          key={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          description={event.description}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;

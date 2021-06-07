import { ICDate, ICLocation } from '../Icons';
import classes from './event-logistics.module.css';
import LogisticsItem from '../LogisticsItem/LogisticsItem';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={ICDate}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={ICLocation}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;

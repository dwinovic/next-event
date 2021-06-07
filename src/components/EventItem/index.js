import Link from 'next/link';
import styles from './EventItem.module.css';
import Button from '../UI/Button/Button';
import { ICArrowRight, ICDate, ICLocation } from '../Icons';

const EventItem = (props) => {
  const { title, date, location, image, id } = props;
  // console.log(date); // 2021-05-30
  const humanReadeableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  // console.log(humanReadeableDate); // May 30, 2021
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h1>{title}</h1>
          <div className={styles.date}>
            <ICDate />
            <time>{humanReadeableDate}</time>
          </div>
          <div className={styles.address}>
            <ICLocation />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Link</span>
            <span className={styles.icon}>
              <ICArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

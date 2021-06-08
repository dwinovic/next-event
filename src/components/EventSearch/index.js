import React, { useRef } from 'react';
import Button from '../UI/Button/Button';
import styles from './EventSearch.module.css';

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const eventSearchHandler = (event) => {
    event.preventDefault();

    const yearInput = yearInputRef.current.value;
    const monthInput = monthInputRef.current.value;
    // console.log(yearInput, monthInput);
    props.onSearch(yearInput, monthInput);
  };

  return (
    <form className={styles.form} onSubmit={eventSearchHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">Februari</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Filter</Button>
    </form>
  );
};

export default EventSearch;

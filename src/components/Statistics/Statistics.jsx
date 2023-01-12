import PropTypes from 'prop-types';
import StatPiece from './Statpiece';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(statsItem => (
          <StatPiece
            key={statsItem.id}
            label={statsItem.label}
            percentage={statsItem.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

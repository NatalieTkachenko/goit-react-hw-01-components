import PropTypes from 'prop-types';
import getRandomHexColor from "utils/randomhexcolor"
import css from './Statistics.module.css'


export default function StatPiece( {label, percentage} )
{
  return (<li className={css.item} style={{backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li> )
}



StatPiece.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
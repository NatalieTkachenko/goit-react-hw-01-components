import PropTypes from 'prop-types';
import statisticsData from './data'
import Datacleaner from "utils/datacleaner";
import StatPiece from "./Statpiece";
import css from './Statistics.module.css';


const cleanStatisticsData = Datacleaner( statisticsData );


export default function Statistics({title})
{
  
  return ( <section className={ css.statistics }>
    { title && ( < h2 className={ css.title }>{ title }</h2>)}
 
      <ul className={ css.statList }>
        
        { cleanStatisticsData.map( statsItem => ( <StatPiece
          key = {statsItem.id}
          label={ statsItem.label }
          percentage= {statsItem.percentage}
        /> ) ) }   
      </ul>
</section>
)
} 


Statistics.propTypes = {

title: PropTypes.string,
}
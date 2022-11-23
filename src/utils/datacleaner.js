
export default function Datacleaner( data )
{
  //console.log( data )
  let uniqueLabels = [];
  //console.log('uniquelabels list', uniqueLabels )
  
  let cleanData = data.reduce( ( accum, curritem, index, array ) =>
  {
    //console.log( curritem );
    if ( !uniqueLabels.includes( curritem.label ) )
    {
      uniqueLabels.push( curritem.label );
      accum = accum.concat( curritem );
     //console.log(uniqueLabels)
    }
    else
    {
      //console.log( curritem.label );
      let elToUpdate = accum.findIndex( ( item ) => item.label === curritem.label );

    //   console.log( elToUpdate );
    //   console.log( accum[ elToUpdate ] );

      accum[ elToUpdate ].percentage = accum[ elToUpdate ].percentage + curritem.percentage;

    //   console.log( accum[ elToUpdate ].percentage );
      
    }

    return accum;       
  }, [] )
  
  return cleanData;
}
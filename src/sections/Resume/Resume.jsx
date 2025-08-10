import React from 'react'
import data from '../../data/dataInfoCard';
import InfoCard from '../../components/InfoCard/InfoCard';

const Resume = () => {
  return (
    <section>
      
         {data.map((item) => (
          <InfoCard key={item.id} title={item.title} description={item.description} />

          
        ))}

    </section>

  )
}

export default Resume;

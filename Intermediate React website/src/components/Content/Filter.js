import React from 'react';
import Section from './FilterUtils/Section';
import Checkbox from './FilterUtils/Checkbox';
import PriceRange from './FilterUtils/PriceRange';
import Options from './FilterUtils/Options';

const Filter = () => {
  return (
    <div className="col-3 d-none d-lg-block overflow-visible pe-2 ps-0">
      <div className='bg-white shadow p-3'>
        <h5 className="mb-5">My recent searches</h5>
        <hr></hr>
        <Section >
          <h6 className='mb-3'>Budget</h6>
          <Checkbox text={"Filter Price Projects"} />
          <PriceRange />
          <Checkbox text={"Hourly Projects"} />
          <PriceRange />
          <Options options={["All Durations", "Less than 1 week", "1 to 4 weeks", "1 to 3 months"]}/>
          <Checkbox text={"Contests"} />
          <PriceRange />
          <hr className='text-muted' />
          <h6 className='mb-3'>Type</h6>
          <Checkbox text={"Local Jobs"} />
          <Checkbox text={"Featured Jobs"} />
          <Checkbox text={"Recruiter Jobs"} />
          <Checkbox text={"Full Time Jobs"} />
        </Section>
      </div>
    </div>
  );
};

export default Filter;
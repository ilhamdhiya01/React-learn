import React, { FC } from 'react';
import { PeoplePropsInterface } from '../interface';

export const List: FC<PeoplePropsInterface> = ({ people }) => {
  return (
    <div className='flex flex-col gap-3'>
      {people.map((person) => (
        <div key={Math.random()} className='flex justify-between items-center p-3 border rounded-md'>
          <div className='flex items-center gap-2'>
            <img src={person.image} alt='default image' className='w-14 h-14 rounded-full' />
            <h2 className='text-[#555] font-semibold'>{person.name}</h2>
          </div>
          <span className='text-sm text-[#555]'>{person.age} years old</span>
          <p className='text-sm text-[#555]'>{person.note}</p>
        </div>
      ))}
    </div>
  );
};

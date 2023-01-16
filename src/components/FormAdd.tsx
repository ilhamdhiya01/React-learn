import React, { useState, FC } from 'react';
import { AddListProps, PeopleInterface } from '../interface';

export const FormAdd: FC<AddListProps> = ({ setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    image: '',
    note: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddList = () => {
    if (!input.name || !input.image || !input.age) {
      return;
    }
    setPeople((val) => {
      return [
        ...val,
        {
          name: input.name,
          age: input.age,
          image: input.image,
          note: input.note,
        },
      ];
    });
    setInput({
      name: '',
      age: '',
      image: '',
      note: '',
    });
  };
  return (
    <div className='space-y-2 max-w-[50%] w-full m-auto mt-10'>
      <div>
        <input type='text' placeholder='Input name' className='border w-full p-2 text-sm text-[#555]' onChange={handleChange} value={input.name} name='name' />
      </div>
      <div>
        <input type='text' placeholder='Input Age' className='border w-full p-2 text-sm text-[#555]' onChange={handleChange} value={input.age} name='age' />
      </div>
      <div>
        <input type='text' placeholder='Input url image' className='border w-full p-2 text-sm text-[#555]' onChange={handleChange} value={input.image} name='image' />
      </div>
      <div>
        <textarea id='' placeholder='Input note' className='border w-full p-2 text-sm text-[#555]' onChange={handleChange} value={input.note} name='note'></textarea>
      </div>
      <div>
        <button onClick={handleAddList} className='w-full bg-blue-600 text-white font-semibold rounded-md p-2'>
          Add To List
        </button>
      </div>
    </div>
  );
};

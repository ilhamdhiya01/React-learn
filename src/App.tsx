import React, { useState } from 'react';
import './App.css';
import { List } from './components/List';
import { FormAdd } from './components/FormAdd';
import { PeopleInterface } from './interface';
function App() {
  const [people, setPeople] = useState<PeopleInterface[]>([]);
  return (
    <div className='App flex justify-center items-center '>
      <div className='max-w-[50%] w-full mt-4 '>
        <List people={people} />
        <FormAdd setPeople={setPeople} />
      </div>
    </div>
  );
}

export default App;

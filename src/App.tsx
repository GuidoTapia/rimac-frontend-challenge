import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Button from './components/button/button';
import {
  Checkbox,
  Dropdown,
  Hyperlink,
  Layout,
  Pagination,
  Stepper,
  TextInput,
} from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout variant='login'>
      <div>
        <div className='flex-center mb-4'>
          <a href='https://vite.dev' target='_blank' className='mr-4'>
            <img src={viteLogo} alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} alt='React logo' />
          </a>
        </div>
        <Button>Click me</Button>
        <Hyperlink>Click me</Hyperlink>
        <TextInput label='Hola' />
        <Checkbox label='Hola' />
        <Dropdown
          label='Hola'
          options={[
            { value: 'Hola', label: 'Hola' },
            { value: 'Mundo', label: 'Mundo' },
          ]}
        />
        <Stepper
          steps={[{ label: 'Hola' }, { label: 'Mundo' }]}
          activeIndex={1}
        />
        <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />

        <h1 className='text-center mb-4'>Vite + React + Sass</h1>

        <div className='card'>
          <div className='card__content'>
            <button
              className='btn btn--primary btn--large'
              onClick={() => setCount(count => count + 1)}
            >
              Count is {count}
            </button>
            <p className='mt-3'>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>

        <p className='text-center mt-4'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Layout>
  );
}

export default App;

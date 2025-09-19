import { useState } from 'react';

import IcProtectionLight from './assets/IcProtectionLight.svg';
import { Layout, Paper } from './components';
import CotizationOption from './pages/home/components/cotization-option/cotization-option';
import PlanOption from './pages/home/components/plan-option/plan-option';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout variant='login'>
      <div>
        <Paper width='300px'>
          <h1>Hola</h1>
        </Paper>
        <CotizationOption
          icon={<img src={IcProtectionLight} alt='Car' />}
          title='Para mí'
          description='Cotiza tu seguro de salud y agrega familiares si así lo deseas.'
        />
        <PlanOption
          icon={<img src={IcProtectionLight} alt='Car' />}
          title='Plan en Casa'
          price={100}
          discountedPrice={90}
          descriptionItems={[
            'Item 1 need a longer description so we can see how it looks',
            'Item 2',
            'Item 3',
          ]}
        />

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

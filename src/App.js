import { Fragment } from 'react';

import Data from './data/data.json'; //json data
import Balance from './components/Balance';
import Spending from './components/Spending';
import Footer from './components/Footer';

import './App.css';

const amounts = Data.map((data) => data.amount);
const highestAmount = Math.max(...amounts);

const weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const d = new Date();
const day = weekday[d.getDay()];

function App() {
  return (
    <Fragment>
      <Balance balance="921.48" />
      <Spending
        data={Data}
        highestAmount={highestAmount}
        day={day}
        monthTotal="478.33"
        percentage="+2.4%"
      />
      <Footer />
    </Fragment>
  );
}

export default App;

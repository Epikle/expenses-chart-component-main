import Bar from './Bar';
import Total from './Total';

const Spending = (props) => (
  <main className="spending rounded">
    <h1>Spending - Last 7 days</h1>
    <div className="spending-charts">
      {props.data.map((data) => (
        <Bar
          key={data.day}
          text={data.day}
          value={data.amount}
          maxValue={props.highestAmount}
          active={props.day === data.day ? true : false}
        />
      ))}
    </div>
    <hr />
    <Total monthTotal={props.monthTotal} percentage={props.percentage} />
  </main>
);

export default Spending;

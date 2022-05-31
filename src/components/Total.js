const Total = (props) => (
  <div className="spending-total">
    <div className="spending-total-this">
      Total this month<span>${props.monthTotal}</span>
    </div>
    <div className="spending-total-last">
      <span>{props.percentage}</span>from last month
    </div>
  </div>
);

export default Total;

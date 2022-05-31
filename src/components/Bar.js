const Bar = (props) => {
  const heightValue = ((props.value / props.maxValue) * 100).toFixed(0);

  const styles = {
    height: heightValue + '%',
  };

  const classes = props.active ? 'bar-chart active' : 'bar-chart';

  return (
    <div className="bar">
      <div className={classes} style={styles}>
        <div className="bar-amount">${props.value}</div>
      </div>
      <div className="bar-text">{props.text}</div>
    </div>
  );
};

export default Bar;

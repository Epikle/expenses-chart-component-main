import logo from '../images/logo.svg';

const Balance = (props) => (
  <header className="balance rounded">
    <div className="balance-amount">
      <h3>My balance</h3>${props.balance}
    </div>
    <img src={logo} alt="Logo" />
  </header>
);

export default Balance;

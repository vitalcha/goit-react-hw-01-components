import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={s.main__tab}>
    <thead className={s.main__cont}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className={s.main__line}>
      {transactions.map(component => (
        <tr key={component.id}>
          <td>{component.type}</td>
          <td>{component.amount}</td>
          <td>{component.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  transactions: PropTypes.shape({
    id: '',
    type: '',
    currency: '',
  }),
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
  ),
};

export default TransactionHistory;

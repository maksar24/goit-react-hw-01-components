import React from 'react';
import PropTypes from 'prop-types';
import { Table, HeadOfTable, Row } from './TransactionHistory.styles';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <HeadOfTable>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </HeadOfTable>

            <tbody>
                {items.map(item => (
                    <Row key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </Row>
                ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.defaultProps = {
    items: [],
};

TransactionHistory.propTypes = {
    items: PropTypes.array,
};
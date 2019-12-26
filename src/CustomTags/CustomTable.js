import React from 'react';
import './CustomTable.css';

export default function CustomTable(props) {
    return (
        <table className={'table'}>
            {props.children}
        </table>
    )
}
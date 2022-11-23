import React from 'react';

export default function TableRow(props) {
    //console.log(props)
    return (
        < tr >
            <td>{props.row.firstname}</td>
            <td>{props.row.lastname}</td>
            <td>{props.row.email}</td>
        </tr >
    );
}
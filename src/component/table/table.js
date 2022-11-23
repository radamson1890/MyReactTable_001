import React from 'react'
import TableRow from './table_row/table_row'
import TableHeaderRow from './table_header/table_header_row'

function MyTable({ props }) {
    //console.log(props);
    const rowElements = props.map(item => {
        return (
            <TableRow row={item} key={item.id}
            />
            )
    })
    return (
    <div className="tabel--main" >   
        <table>
           <TableHeaderRow />
            <tbody>
               {rowElements}
            </tbody>
         </table>
            </div>
        );
}

export default MyTable;
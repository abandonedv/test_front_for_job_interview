import React from 'react';
import {useTable} from 'react-table';
import classes from "./Table.module.css";

const Table = ({dataList}) => {
    console.log(dataList)

    const data = React.useMemo(() =>
            dataList.map((item) => ({
                numb: item[0],
                order_numb: item[1],
                usd_cost: item[2],
                rub_cost: item[3],
                delivery_time: item[4]
            })),
        [dataList]
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'История поставок',
                columns: [
                    {
                        Header: '№',
                        accessor: 'numb',
                    },
                    {
                        Header: 'Заказ №',
                        accessor: 'order_numb',
                    },
                    {
                        Header: 'Стоимость $',
                        accessor: 'usd_cost',
                    },
                    {
                        Header: 'Стоимость RUB',
                        accessor: 'rub_cost',
                    },
                    {
                        Header: 'Срок поставки',
                        accessor: 'delivery_time',
                    },
                ],
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table {...getTableProps()} className={classes.Table}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default Table;
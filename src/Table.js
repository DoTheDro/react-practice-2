import React, { Component } from 'react';

const TableHeader = () => {
    return(
        <thead>
          <tr>
            <th>Tasks To Dos</th>
          </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const tasksTodos = props.todos;

    const tableRow = tasksTodos.map((todo, index) => {
        return (
            <tr key={index}>
                <td>{ todo }</td>
                <td>
                    <button onClick={() => props.handleRemove(index)}>Remove Task</button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{tableRow}</tbody>
    )
}

const Table = (props) => {
    const { todos, handleRemove } = props;

    return (
        <table>
            <TableHeader />
            <TableBody todos={todos} handleRemove={handleRemove} />
        </table>
    )
}

export default Table
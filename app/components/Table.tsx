// Table.tsx
import React from 'react';
import Swal from 'sweetalert2';
import { data } from './TableData';

export const Table = () => {
    const handleClick = (item: { id: any; name: any; age: any; }) => {
        Swal.fire({
            title: 'Row Data',
            html: `<strong>ID:</strong> ${item.id}<br/><strong>Name:</strong> ${item.name}<br/><strong>Age:</strong> ${item.age}`,
            icon: 'info',
        });
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => handleClick(item)}>View</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
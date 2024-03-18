// Table.tsx
import React from 'react';
import Swal from 'sweetalert2';
import { data } from './TableData';

export const Table = () => {
    const handleClick = (item: { id: any; no: any; kode_pel: any; alamat: any; no_hp: any; status: any; }) => {
        Swal.fire({
            title: 'Row Data',
            html: `<strong>ID:</strong> ${item.id}<br/><strong>No:</strong> ${item.no}<br/><strong>Kode Pelanggan:</strong> ${item.kode_pel}<br/><strong>Alamat:</strong> ${item.alamat}<br/><strong>No Hp:</strong> ${item.no_hp}<br/><strong>Status:</strong> ${item.status}`,
            icon: 'info',
        });
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Kode Pelanggan</th>
                    <th>Alamat</th>
                    <th>No Hp</th>
                    <th>Status</th>
                    <th>Info</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td style={{display: 'none'}}>{item.id}</td>
                        <td>{index + 1}</td>
                        <td>{item.kode_pel}</td>
                        <td>{item.alamat}</td>
                        <td>{item.no_hp}</td>
                        <td>{item.status}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => handleClick(item)}>View</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
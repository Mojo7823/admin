// app/components/Table.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/customer');
            if (!res.ok) {
                console.error('An error occurred:', await res.text());
                return;
            }
            const data = await res.json();
            console.log(data); 
            setData(data);
        };

        fetchData();
        
    }, []);

    const columns = [
        { field: 'id', headerName: 'No', width: 30 },
        { field: 'kode_pel', headerName: 'Kode Pelanggan', width: 30 },
        { field: 'nama', headerName: 'Nama Pelanggan', width: 130 },
        { field: 'alamat', headerName: 'Alamat', width: 200 },
        { field: 'alamat2', headerName: 'Alamat Lengkap', width: 200},
        { field: 'no_hp', headerName: 'No Hp', width: 130 },
        { field: 'status', headerName: 'Status', width: 100 },
    ];

    return (
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid 
                rows={data} 
                columns={columns} 
                onRowClick={(rowParams) => console.log(rowParams)}
            />
        </div>
    );
};
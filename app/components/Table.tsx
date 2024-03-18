// nextjs/app/components/Table.tsx
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


const StyledDataGrid = styled(DataGrid)`
    & .MuiDataGrid-sortIcon {
        display: none;
    }
    & .MuiDataGrid-columnHeaderDropdownIcon {
        display: none;
    }
`;

export const Table = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/customer');
            if (!res.ok) {
                console.error('An error occurred:', await res.text());
                return;
            }
            const data = await res.json();
            setData(data);
        };

        fetchData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'No', width: 50},
        { field: 'kode_pel', headerName: 'Kode Pelanggan', width: 30 },
        { field: 'nama', headerName: 'Nama Pelanggan', width: 180},
        { field: 'alamat', headerName: 'Alamat', width: 200},
        { field: 'alamat2', headerName: 'Alamat Lengkap', width: 200},
        { field: 'no_hp', headerName: 'No Hp', width: 130},
        { field: 'status', headerName: 'Status', width: 100 },
    ];

    const handleDoubleClick = (params: { row: { id: any; kode_pel: any; nama: any; alamat: any; alamat2: any; no_hp: any; status: any; }; }) => {
        Swal.fire({
            icon: "info",
            html: `
                <p><strong>No:</strong> ${params.row.id}</p>
                <p><strong>Kode Pelanggan:</strong> ${params.row.kode_pel}</p>
                <p><strong>Nama Pelanggan:</strong> ${params.row.nama}</p>
                <p><strong>Alamat:</strong> ${params.row.alamat}</p>
                <p><strong>Alamat Lengkap:</strong> ${params.row.alamat2}</p>
                <p><strong>No Hp:</strong> ${params.row.no_hp}</p>
                <p><strong>Status:</strong> ${params.row.status}</p>
            `,
            confirmButtonText: 'Close'
        });
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((row) =>
        columns.some(
            (column) => row[column.field] && row[column.field].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleColumnHeaderClick: GridEventListener<'columnHeaderClick'> = (
        params,  // GridColumnHeaderParams
        event,   // MuiEvent<React.MouseEvent<HTMLElement>>
        details, // GridCallbackDetails
      ) => {
        event.defaultMuiPrevented = true;
      };

      return (
        <div style={{ height: '600px', width: '100%' }}>
            <Container>
                <Row className="mb-3">
                    <Col>
                        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Cari Data..." className="form-control" />
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary">Button 1</Button>
                    </Col>
                    <Col xs="auto">
                        <Button variant="secondary">Button 2</Button>
                    </Col>
                </Row>
            </Container>
            <StyledDataGrid 
                rows={filteredData} 
                columns={columns} 
                onCellDoubleClick={handleDoubleClick}
                columnVisibilityModel={{
                    id: false,
                }}
                onColumnHeaderClick={handleColumnHeaderClick}
            />
        </div>
    );
};
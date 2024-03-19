// nextjs/app/components/Datacustomer.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal, Table as BootstrapTable } from 'react-bootstrap';

type Customer = {
  id: string;
  kode_pel: string;
  nama: string;
  alamat: string;
  alamat2: string;
  no_hp: string;
  status: string;
  no: string;
};
const StyledDataGrid = styled(DataGrid)``;
type Column = {
  field: keyof Customer;
  headerName: string;
  width?: number;
};

  const columns: Column[] = [
    { field: 'id', headerName: 'id'},
    { field: 'kode_pel', headerName: 'Kode Pelanggan', width: 50 },
    { field: 'nama', headerName: 'Nama Pelanggan', width: 180},
    { field: 'alamat', headerName: 'Alamat', width: 200},
    { field: 'alamat2', headerName: 'Alamat Lengkap', width: 200},
    { field: 'no_hp', headerName: 'No Hp', width: 130},
    { field: 'status', headerName: 'Status', width: 100 },
  ];

export const Datacustomer = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Customer | null>(null);

  const fetchData = useCallback(async () => {
    const res = await fetch('/api/customer');
    if (!res.ok) {
      console.error('An error occurred:', await res.text());
      return;
    }
    let data: Customer[] = await res.json();
    data = data.map((item: Customer, index: number) => ({ ...item, no: (index + 1).toString() }));
    setData(data);

  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDoubleClick = ({ row }: { row: Customer }) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);


  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredData = data.filter((row) =>
    columns.some(
      (column) => row[column.field] && row[column.field].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleColumnHeaderClick: GridEventListener<'columnHeaderClick'> = (
    params,
    event,
    details,
  ) => {
    event.defaultMuiPrevented = true;
  };

  return (
    <div style={{ height: '550px', width: '100%' }}>
      <Container>
        <Row className="mb-3">
          <Col>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Cari Data..." className="form-control" />
          </Col>
          <Col xs="auto">
            <Button variant="primary">Tambah</Button>
          </Col>
          <Col xs="auto">
            <Button variant="danger">Hapus</Button>
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
 
<Modal show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Data Pelanggan</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedRow && (
      <BootstrapTable striped bordered hover>
        <tbody>
          <tr><td><strong>Id:</strong></td><td>{selectedRow.id}</td></tr>
          <tr><td><strong>Kode Pelanggan:</strong></td><td>{selectedRow.kode_pel}</td></tr>
          <tr><td><strong>Nama Pelanggan:</strong></td><td>{selectedRow.nama}</td></tr>
          <tr><td><strong>Alamat:</strong></td><td>{selectedRow.alamat}</td></tr>
          <tr><td><strong>Alamat Lengkap:</strong></td><td>{selectedRow.alamat2}</td></tr>
          <tr><td><strong>No Hp:</strong></td><td>{selectedRow.no_hp}</td></tr>
          <tr><td><strong>Status:</strong></td><td>{selectedRow.status}</td></tr>
        </tbody>
      </BootstrapTable>
    )}
  </Modal.Body>
  <Modal.Footer>
  <Button variant="success">Panggil</Button>
    <Button variant="primary">Kirim Pesan</Button>
    <Button variant="dark">Edit Data</Button>
    <Button variant="info">Ganti Status</Button>
    <Button variant="secondary" onClick={handleClose}>Tutup</Button>
  </Modal.Footer>
</Modal>
    </div>
  );
};
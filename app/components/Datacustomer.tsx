// nextjs/app/components/Datacustomer.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { DataGrid, GridColumnHeaderParams, GridEventListener, MuiEvent } from '@mui/x-data-grid';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal, Table as BootstrapTable, Form } from 'react-bootstrap';

const StyledDataGrid = styled(DataGrid)``;

const columns = [
    { field: 'no', headerName: 'No', width: 70 },
    { field: 'id', headerName: 'id'},
    { field: 'kode_pel', headerName: 'Kode Pelanggan', width: 70 },
    { field: 'nama', headerName: 'Nama Pelanggan', width: 180},
    { field: 'alamat', headerName: 'Alamat', width: 200},
    { field: 'alamat2', headerName: 'Alamat Lengkap', width: 200},
    { field: 'no_hp', headerName: 'No Hp', width: 130},
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'keterangan', headerName: 'Keterangan'}
  ];

  interface RowData {
    no: number;
    id: string;
    kode_pel: string;
    nama: string;
    alamat: string;
    alamat2: string;
    no_hp: string;
    status: string;
    keterangan: string;
  }

export const Datacustomer = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);

  const [filters, setFilters] = useState({ noHp: false, salesOffline: false });

    const fetchData = useCallback(async () => {
      const res = await fetch('/api/customer');
      if (!res.ok) {
        console.error('An error occurred:', await res.text());
        return;
      }
      let data = await res.json();
      // Add 'no' field to each row
      data = data.map((item: any, index: number) => ({ no: index + 1, ...item }));
      // Apply filters
      if (filters.noHp) {
        data = data.filter((item: any) => item.no_hp && item.no_hp.trim() !== '');
      }
      if (filters.salesOffline) {
        data = data.filter((item: any) => !item.keterangan || item.keterangan.trim() === '');
      }
      setData(data);
    }, [filters]);

  const applyFilters = () => {
    setShowFilterModal(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDoubleClick = ({ row }: { row: any }) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleFilter = () => setShowFilterModal(true);

  const handleSearch = useCallback((event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredData = data.filter((row: any) =>
  columns.some(
    (column) => row[column.field] && (row[column.field] as any).toString().toLowerCase().includes(searchTerm.toLowerCase())
  )
  );

  const handleColumnHeaderClick = (
    params: GridColumnHeaderParams,
    event: React.MouseEvent<HTMLElement>,
    details: any,
  ) => {
    event.preventDefault();
  };
  return (
    <div style={{ height: '600px', width: '100%' }}>
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
          <Col xs="auto">
            <Button variant="warning" onClick={handleFilter}>Filter</Button>
          </Col>
        </Row>
        </Container>
      <StyledDataGrid 
        rows={filteredData} 
        columns={columns} 
        onCellDoubleClick={handleDoubleClick}
        columnVisibilityModel={{
          id: false,
          keterangan: false,
        }}
        onColumnHeaderClick={handleColumnHeaderClick}
      />
 
 <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Pengaturan Filter</Modal.Title>
  </Modal.Header>
  <Modal.Body>
      <Form.Check 
      type="switch"
      id="custom-switch1"
      label="Terdapat No HP"
      checked={filters.noHp}
      onChange={(e) => setFilters((prev) => ({ ...prev, noHp: e.target.checked }))}
    />
  <Form.Check 
    type="switch"
    id="custom-switch2"
    label="Pisah Sales Offline"
    checked={filters.salesOffline}
    onChange={(e) => setFilters((prev) => ({ ...prev, salesOffline: e.target.checked }))}
  />
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowFilterModal(false)}>Tutup</Button>
    <Button variant="primary" onClick={applyFilters}>Terapkan Filter</Button>
  </Modal.Footer>
</Modal>

 <Modal show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Data Pelanggan</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedRow && (
      <BootstrapTable striped bordered hover>
        <tbody>
          <tr><td><strong>No:</strong></td><td>{selectedRow.no}</td></tr>
          <tr><td><strong>Kode Pelanggan:</strong></td><td>{selectedRow.kode_pel}</td></tr>
          <tr><td><strong>Nama Pelanggan:</strong></td><td>{selectedRow.nama}</td></tr>
          <tr><td><strong>Alamat:</strong></td><td>{selectedRow.alamat}</td></tr>
          <tr><td><strong>Alamat Lengkap:</strong></td><td>{selectedRow.alamat2}</td></tr>
          <tr><td><strong>No Hp:</strong></td><td>{selectedRow.no_hp}</td></tr>
          <tr><td><strong>Status:</strong></td><td>{selectedRow.status}</td></tr>
          <tr><td><strong>Keterangan:</strong></td><td>{selectedRow.keterangan}</td></tr>
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
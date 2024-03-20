// nextjs/app/components/Datacustomer.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { DataGrid, GridColumnHeaderParams, GridEventListener, GridRowParams, MuiEvent } from '@mui/x-data-grid';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal, Table as BootstrapTable, Form } from 'react-bootstrap';
import swal from 'sweetalert2';

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
  const [data, setData] = useState<RowData[]>([]);
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
      data = data.map((item: any, index: number) => ({ no: index + 1, ...item }));
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

  const handleSelectionModelChange = (newSelectionModel: any) => {
    setSelectedRows(newSelectionModel);
  };

  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  
  const handleAdd = () => {
    swal.fire({
      title: 'Tambah Data',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Kode Pelanggan">
        <input id="swal-input2" class="swal2-input" placeholder="Nama Pelanggan">
        <input id="swal-input3" class="swal2-input" placeholder="Alamat">
        <input id="swal-input4" class="swal2-input" placeholder="Alamat Lengkap">
        <input id="swal-input5" class="swal2-input" placeholder="No Hp">
        <input id="swal-input6" class="swal2-input" placeholder="Status">
        <input id="swal-input7" class="swal2-input" placeholder="Keterangan">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          kode_pel: (document.getElementById('swal-input1') as HTMLInputElement).value,
          nama: (document.getElementById('swal-input2') as HTMLInputElement).value,
          alamat: (document.getElementById('swal-input3') as HTMLInputElement).value,
          alamat2: (document.getElementById('swal-input4') as HTMLInputElement).value,
          no_hp: (document.getElementById('swal-input5') as HTMLInputElement).value,
          status: (document.getElementById('swal-input6') as HTMLInputElement).value,
          keterangan: (document.getElementById('swal-input7') as HTMLInputElement).value,
        }
      },
      showCancelButton: true,
      confirmButtonText: 'Tambah',
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        fetch('/api/insertCustomer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(result.value),
        })
        .then(res => res.json())
        .then(response => {
          if (response.message === 'Data Berhasil ditambahkan.') {
            swal.fire('Success!', response.message, 'success');
            fetchData();
          } else {
            swal.fire('Error!', response.message, 'error');
          }
        })
        .catch(err => {
          swal.fire('Error!', 'Server error, Database bermasalah', 'error');
        });
      }
    });
  };


  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleFilter = () => setShowFilterModal(true);

  const handleSearch = useCallback((event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredData = data.filter((row: any) =>
  columns.some(
    (column) => row[column.field] && (row[column.field] as any).toString().toLowerCase().includes(searchTerm.toLowerCase())
  )
  );

  const handleDelete = () => {
    if (selectedRows.length > 0) {
      const selectedCustomer = data.find((item: any) => item.id === selectedRows[0]);
      const customerName = selectedCustomer ? selectedCustomer.nama : '';
  
      swal.fire({
        title: `Hapus Data Pelanggan ${customerName}?`,
        text: `Data yang telah dihapus tidak dapat dikembalikan!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Iya, Hapus!',
        cancelButtonText: 'Batalkan!',
        confirmButtonColor: '#d33',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          fetch('/api/deleteCustomer', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids: selectedRows[0] }),
          })
          .then(res => res.json())
          .then(response => {
            if (response.message === 'Data deleted successfully.') {
              swal.fire('Deleted!', response.message, 'success');
              fetchData();
            } else {
              swal.fire('Error!', response.message, 'error');
            }
          })
          .catch(err => {
            swal.fire('Error!', 'The AJAX request failed!', 'error');
          });
        }
      })
    } else {
      swal.fire('Error!', 'No rows selected!', 'error');
    }
  };

  const handleColumnHeaderClick = (
    params: GridColumnHeaderParams,
    event: React.MouseEvent<HTMLElement>,
    details: any,
  ) => {
    event.preventDefault();
  };

  const handleRowClick = (param: any) => {
    setSelectedRows([param.id]);
  };

  const onClickKirimPesan = async () => {
    if (!selectedRow?.no_hp) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No phone number provided!',
      }).then(() => {
        handleShow(); 
      });
    } else {
      handleClose(); 
      const result = await swal.fire({
        input: 'textarea',
        inputPlaceholder: 'Type your message here...',
        showCancelButton: true,
        confirmButtonText: 'Kirim',
        cancelButtonText: 'Batal',
      });
  
      if (result.isConfirmed) {
        const message = result.value;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${selectedRow?.no_hp}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      }
  
      handleShow(); // Re-open the Bootstrap modal
    }
  };

  function handleShow() {
    setShowModal(true);
  }
  

  
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <Container>
        <Row className="mb-3">
          <Col>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Cari Data..." className="form-control" />
          </Col>
          <Col xs="auto">
            <Button variant="primary" onClick={handleAdd}>Tambah</Button>
          </Col>
          <Col xs="auto">
          <Button variant="danger" onClick={handleDelete}>Hapus</Button>
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
          onRowClick={(param) => handleRowClick(param)}
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
        </tbody>
      </BootstrapTable>
    )}
  </Modal.Body>
  <Modal.Footer>
  <Button variant="success" onClick={() => {
    if (selectedRow?.no_hp) {
      window.open('https://wa.me/' + selectedRow?.no_hp);
    } else {
      swal.fire('Error!', 'Tidak ada nomor telpon untuk dipanggil!', 'error');
    }
  }}>Panggil</Button>
    <Button variant="primary" onClick={onClickKirimPesan}>Kirim Pesan</Button>
    <Button variant="dark">Edit Data</Button>
    <Button variant="info">Ganti Status</Button>
    <Button variant="secondary" onClick={handleClose}>Tutup</Button>
  </Modal.Footer>
</Modal>
    </div>
  );
};


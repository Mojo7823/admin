// admin/app/components/Konten.tsx
"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from './Table';

const Konten = () => {
    return (
        <div className="details my-5 pt-5"> {/* Add a top padding here */}
            <div className="container">
                <Table />
            </div>
        </div>
    );
};

export default Konten;
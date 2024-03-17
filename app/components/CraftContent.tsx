// CraftContent.tsx
"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from './Table';

const CraftContent = () => {
    return (
        <div className="details my-5">
            <div className="container">
                <Table />
            </div>
        </div>
    );
};

export default CraftContent;
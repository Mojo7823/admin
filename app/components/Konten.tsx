// admin/app/components/Konten.tsx
"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Datacustomer } from './Datacustomer';

const Konten = () => {
    return (
        <div className="details my-5 pt-5">
            <div className="container">
                <Datacustomer />
            </div>
        </div>
    );
};

export default Konten;
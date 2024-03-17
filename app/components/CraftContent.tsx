"use client"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const CraftContent = () => {
    const data = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Doe', age: 35 },
    ];

    const handleButtonClick = (title: string, text: string) => {
        Swal.fire({
            title: title,
            text: text,
            icon: 'info',
            confirmButtonText: 'Cool'
        });
    };

    return (
        <div className="details my-5">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container mt-5">
                <button className="btn btn-primary mr-2" onClick={() => handleButtonClick('Button 1', 'You clicked Button 1!')}>Button 1</button>
                <button className="btn btn-secondary mr-2" onClick={() => handleButtonClick('Button 2', 'You clicked Button 2!')}>Button 2</button>
                <button className="btn btn-success" onClick={() => handleButtonClick('Button 3', 'You clicked Button 3!')}>Button 3</button>
            </div>
        </div>
    );
};

export default CraftContent;
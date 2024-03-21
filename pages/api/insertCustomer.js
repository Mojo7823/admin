// nextjs/pages/api/insertCustomer.js
import db from '../../app/components/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { kode_pel, nama, alamat, alamat2, no_hp, status } = req.body;
    try {
      await db.execute("INSERT INTO customer (kode_pel, nama, alamat, alamat2, no_hp, status) VALUES (?, ?, ?, ?, ?, ?)", [kode_pel, nama, alamat, alamat2, no_hp, status]);
      res.status(200).json({ message: 'Data berhasil ditambahkan.' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ message: 'Server error, Database bermasalah.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
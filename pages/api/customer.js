// nextjs/pages/api/customers.js
import db from '../../app/components/db';

export default async function handler(req, res) {
  try {
    const [rows] = await db.execute("SELECT id,kode_pel,nama, alamat, alamat2, no_hp, keterangan, status FROM customer");
    res.json(rows);
  } catch (error) {
    console.error('General Database error:', error);
    res.status(500).json({ message: 'Database Eror, Coba cek customer.js.' });
  }
}
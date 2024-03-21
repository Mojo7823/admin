// nextjs/pages/api/updateCustomer/[id].js
import db from '../../../app/components/db';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const { kode_pel, nama, alamat, alamat2, no_hp, status, keterangan } = req.body;
    try {
      await db.execute("UPDATE customer SET kode_pel = ?, nama = ?, alamat = ?, alamat2 = ?, no_hp = ?, status = ?, keterangan = ? WHERE id = ?", [kode_pel, nama, alamat, alamat2, no_hp, status, keterangan, id]);
      const [updatedRow] = await db.execute("SELECT * FROM customer WHERE id = ?", [id]);
      res.status(200).json({ message: 'Data updated successfully.', updatedRow });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ message: 'An error occurred.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
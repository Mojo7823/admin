// nextjs/pages/api/deleteCustomer.js
import db from '../../app/components/db';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { ids } = req.body;
    try {
      await db.query("DELETE FROM customer WHERE id IN (?)", [ids]);
      res.status(200).json({ message: 'Data deleted successfully.' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ message: 'An error occurred.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
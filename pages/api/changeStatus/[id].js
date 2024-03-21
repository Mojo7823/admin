// nextjs/pages/api/changeStatus/[id].js
import db from '../../../app/components/db';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const { status } = req.body;
    try {
      await db.execute("UPDATE customer SET status = ? WHERE id = ?", [status, id]);
      res.status(200).json({ message: 'Status updated successfully.' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ message: 'An error occurred.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
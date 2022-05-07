import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  const { email, password } = req.body;

  if (
    !email ||
    !password ||
    !email.includes('@') ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: 'Invalid email or password' });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const hashedPassord = await hashPassword(password);
  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassord,
  });
}

export default handler;

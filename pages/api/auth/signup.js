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
  try {
    const result = await db.collection('users').insertOne({
      email: email,
      password: hashedPassord,
    });
  } catch (error) {
    res.json({ message: 'Error in creating a new user', error: error });
    return;
  }
  res.status(201).json({ message: 'Created new user' });
}

export default handler;

import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { formModel } from '../../../models';
import { Input } from '../../../types';
import { isUserOwner } from '../../../utils/apiRequestChecker';

const handler = nc<NextApiRequest, NextApiResponse>();

// GET method handler
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(418).json({ error: 'Wrong API route' });
});

// POST method handler
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { formFields } = req.body;

  try {
    res.json({});
  } catch (error) {
    res.status(403).json({ error });
  }
});

// PUT method handler
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const { formFields, id, requested, paid } = req.body;

  try {
    res.json({});
  } catch (error) {
    console.log(error);
    res.status(403).json({ error });
  }
});

// DELETE method handler
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;

  try {
    res.json({});
  } catch (error) {
    res.status(403).json({ error });
  }
});
export default handler;

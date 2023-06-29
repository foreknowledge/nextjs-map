import { Store } from '@/types/store';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Store[]>
) {
  const stores = (await import('@/public/stores.json')).default as Store[];
  return res.status(200).json(stores);
}

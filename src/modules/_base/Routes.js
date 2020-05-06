import { Router } from 'express';

import baseCreate from './controllers/create';
import baseGetById from './controllers/getById';
import baseUpdateById from './controllers/groupUpdateById';
import baseDeleteById from './controllers/deleteById';
import baseGetAll from './controllers/getAll';

const router = Router();

router.post(
  '/',
  baseCreate,
);

router.get(
  '/',
  baseGetAll,
);

router.get(
  '/:baseId',
  baseGetById,
);

router.patch(
  '/:baseId',
  baseUpdateById,
);

router.delete(
  '/:baseId',
  baseDeleteById,
);

export default router;

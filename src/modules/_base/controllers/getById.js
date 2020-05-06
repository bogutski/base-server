import { get } from 'lodash';
import { bases } from '../memoryDB';

const baseGetById = (req, res) => {
  const baseId = get(req, 'params.baseId');

  const filtered = bases.filter((el) => el.id === baseId);

  res.status(200).json(filtered);
};

export default baseGetById;

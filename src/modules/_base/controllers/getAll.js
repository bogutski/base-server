import { bases } from '../memoryDB';

const baseGetAll = (req, res) => {
  res.status(200).json(bases);
};

export default baseGetAll;

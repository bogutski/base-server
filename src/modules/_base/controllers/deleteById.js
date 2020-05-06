import message from '../../utils/messages';
import { get } from 'lodash';
import { bases } from '../memoryDB';

const baseDeleteById = (req, res) => {
  // читаем id из параметров URL запроса
  const baseId = get(req, 'params.baseId');

  bases = bases.filter(el => el.id !== baseId);

  res.status(200).json(message.success('Base deleted'));
};

export default baseDeleteById;

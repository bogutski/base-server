import message from '../../utils/messages';
import { get } from 'lodash';

export default async function baseUpdateById(req, res) {
  const baseId = get(req, 'params.baseId');
  res.status(200).json(message.success('Base updated'));

}

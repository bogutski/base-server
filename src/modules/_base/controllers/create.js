import { get } from 'lodash';
import { bases } from '../memoryDB';
import { v4 as uuidv4 } from 'uuid';

export default async function baseCreate(req, res) {
  const id = uuidv4()

  // Читаем данные из запроса
  const name = get(req, 'body.name', '- no name -');
  // const description = get(req, 'body.description');

  bases.push({
    id,
    name,
    done: false,
  });

  res.status(200).json(bases);
}

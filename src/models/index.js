// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Infomation } = initSchema(schema);

export {
  Note,
  Infomation
};
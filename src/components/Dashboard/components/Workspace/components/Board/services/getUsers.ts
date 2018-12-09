import { IPerson } from '../../../../../../../types/randomUser';

export const url = 'https://randomuser.me/api/?nat=gb&results=5';

export const getUsers = async () => {
  const body = await fetch(url);
  const data = (await body.json()).results as IPerson[];
  return data;
};

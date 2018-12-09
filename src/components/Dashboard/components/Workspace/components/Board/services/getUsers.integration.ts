import { url } from './getUsers';

test('API is available', async () => {
  expect.assertions(1);
  const response = await fetch(url);
  expect(response.status).toBe(200);
});

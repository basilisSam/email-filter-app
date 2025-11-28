import { filterEmails } from '../emailFilter';

it('should return emails that contain both @ and .', () => {
  const input = ['john@example.com', 'jane@company.org'];
  const result = filterEmails(input);
  expect(result).toEqual(['john@example.com', 'jane@company.org']);
});

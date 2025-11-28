export const filterEmails = (emails) => {
  const validEmails = [];

  for (const email of emails) {
    const hasAt = email.includes('@');
    const hasDomain = email.includes('.');

    if (hasAt && hasDomain) {
      validEmails.push(email);
    }
  }

  return validEmails;
};

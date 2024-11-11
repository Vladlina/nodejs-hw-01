import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    let dbContacts = await readContacts();

    dbContacts = [];

    await writeContacts(dbContacts);
  } catch (err) {
    console.error(err);
  }
};

removeAllContacts();

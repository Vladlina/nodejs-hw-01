import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let dbContacts = await readContacts();

    if (dbContacts.length > 0) {
      dbContacts.pop();

      await writeContacts(dbContacts);
    }
  } catch (err) {
    console.error(err);
  }
};
removeLastContact();

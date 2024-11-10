import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const dbContacts = await readContacts();

    let newContacts = [];
    for (let i = 0; i < number; i += 1) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...dbContacts, ...newContacts];

    await writeContacts(updatedContacts);
  } catch (err) {
    console.error('Error:', err);
  }
};

generateContacts(5);

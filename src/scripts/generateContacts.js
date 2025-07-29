const createFakeContact = require("../utils/createFakeContact");
const readContacts = require("../utils/readContacts");
const writeContacts = require("../utils/writeContacts");

const generateContacts = async (count = 5) => {
  const contacts = await readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
};

generateContacts();

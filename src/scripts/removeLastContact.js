const readContacts = require("../utils/readContacts");
const writeContacts = require("../utils/writeContacts");

const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
  }
};

removeLastContact();

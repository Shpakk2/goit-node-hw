const argv = require("yargs").argv;

const contacts = require('./contacts')

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const allContacts = await contacts.listContacts()
          console.log(allContacts)
      break;

    case "get":
          const oneContact = await contacts.getContactById(id)
          console.log(oneContact)
      break;

    case "add":
          const newContact = await contacts.addContact({ name, email, phone });
          console.log(newContact);
        break;
    case "remove":
          const removeContact = await contacts.removeContact(id)
          console.log(removeContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// invokeAction({action: "list"});
// invokeAction({action: "get", id: "2"});
// invokeAction({action: "add", name: "Anton", email: "anton@gmail.com", phone: "555-55-55" });

// invokeAction({action: "remove", id: "ru_VI_EVejJ9CChZTeoEu"});

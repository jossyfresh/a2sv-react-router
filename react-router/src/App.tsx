import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import AddContact from "./AddContact";

export type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "John Doe",
      phone: "555-555-5555",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "555-555-5555",
      email: "jane@gmail.com",
    },
    {
      id: 3,
      name: "Jack Doe",
      phone: "555-555-5555",
      email: "jack@gmail.com",
    },
  ]);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (updatedContact: Contact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (id: number) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ContactList contacts={contacts} deleteContact={deleteContact} />
          }
        />
        <Route
          path="/contacts/:id"
          element={<ContactDetails contacts={contacts} />}
        />
        <Route
          path="/contacts/:id/edit"
          element={
            <EditContact contacts={contacts} editContact={editContact} />
          }
        />
        <Route path="/add" element={<AddContact addContact={addContact} />} />
      </Routes>
    </Router>
  );
};

export default App;

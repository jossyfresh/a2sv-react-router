import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contact } from "./App";

const EditContact = ({
  contacts,
  editContact,
}: {
  contacts: Contact[];
  editContact: (contact: Contact) => void;
}) => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const contact = contacts.find((contact) => contact.id === parseInt(id));
    if (contact) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
  }, [contacts, id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Update contact in application state
    const updatedContact = { id: parseInt(id), name, phone, email };
    editContact(updatedContact);
    // Navigate back to contact details page
    navigate(`/contacts/${id}`);
  };

  return (
    <form className="p-4 rounded-md shadow-md" onSubmit={handleSubmit}>
      <div className="p-4 rounded-md flex gap-5">
        <label className="bg-gray-200 p-4 rounded-md" htmlFor="name">
          Name:
        </label>
        <input
          className="bg-gray-200 p-4 rounded-md"
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="p-4 rounded-md flex gap-5">
        <label className="bg-gray-200 p-4 rounded-md" htmlFor="phone">
          Phone:
        </label>
        <input
          className="bg-gray-200 p-4 rounded-md"
          type="text"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className="p-4 rounded-md flex gap-5">
        <label className="bg-gray-200 p-4 rounded-md" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          className="bg-gray-200 p-4 rounded-md"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="flex gap-5 justify-center">
        <button
          className="bg-gray-200 p-2 rounded-md mt-2 flex flex-col items-center"
          type="submit"
        >
          Save Changes
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-gray-200 p-2 rounded-md mt-2 flex flex-col items-center"
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default EditContact;

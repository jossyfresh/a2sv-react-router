import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Contact } from "./App";

const AddContact = ({
  addContact,
}: {
  addContact: (contact: Contact) => void;
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newContact = { id: Date.now(), name, phone, email };
    addContact(newContact);
    navigate("/");
  };

  return (
    <form className="p-4 rounded-md shadow-md" onSubmit={handleSubmit}>
      <div className="p-4 rounded-md flex gap-5">
        <label className="bg-gray-200 p-4 rounded-md" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-200 p-4 rounded-md"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className=" p-4 rounded-md flex gap-5">
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
      <div className=" p-4 rounded-md flex gap-7">
        <label className="bg-gray-200 p-4 rounded-md" htmlFor="email">
          Email:
        </label>
        <input
          className="bg-gray-200 p-4 rounded-md"
          type="email"
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
          Add Contact
        </button>
        <button
          className="bg-gray-200 p-2 rounded-md mt-2 flex flex-col items-center"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default AddContact;

import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "./App";

const ContactList = ({
  contacts,
  deleteContact,
}: {
  contacts: Contact[];
  deleteContact: (id: number) => void;
}) => {
  return (
    <div className="bg-gray-300 p-10 m-10">
      <div className="">
        <h1 className="text-3xl bg-gray-200 p-2 m-2 rounded-md">
          Contact List
        </h1>
      </div>
      <div className="justify-end flex">
        <Link className="bg-gray-100 p-2 m-2 rounded-md" to="/add">
          Add Contact
        </Link>
      </div>
      <div className="">
        <ul className="flex flex-col">
          {contacts.map((contact) => (
            <li
              className="bg-gray-100 flex  bg-gray-100 p-2 m-2"
              key={contact.id}
            >
              <Link
                className="bg-gray-100 p-2 m-2 w-[28%] flex flex-col justify-center"
                to={`/contacts/${contact.id}`}
              >
                {contact.name}
              </Link>
              <Link
                className="bg-gray-100 p-2 m-2 w-[28%] flex flex-col justify-center"
                to={`/contacts/${contact.id}`}
              >
                {contact.phone}
              </Link>
              <Link
                className="bg-gray-100 p-2 m-2 w-[28%] flex flex-col justify-center"
                to={`/contacts/${contact.id}`}
              >
                {contact.email}
              </Link>
              <div className="bg-gray-100 p-2 m-2 w-[12%] flex justify-between">
                <Link
                  className="bg-gray-200 px-2 py-3 rounded-lg"
                  to={`/contacts/${contact.id}/edit`}
                >
                  Edit
                </Link>
                <button
                  className="bg-gray-200 px-2 py-3 rounded-lg"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;

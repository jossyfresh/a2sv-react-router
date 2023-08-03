import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Contact } from "./App";

const ContactDetails = ({ contacts }: { contacts: Contact[] }) => {
  const { id } = useParams<{ id: string }>();
  const contact = contacts.find((contact) => contact.id === parseInt(id));
  const navigate = useNavigate();

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className=" p-4 rounded-md mb-2">
      <h1 className="bg-gray-200 p-4 rounded-md flex justify-center text-2xl mb-2">
        Contact Details
      </h1>
      <div className="bg-gray-200 p-4 rounded-md mb-2">
        <strong>Name:</strong> {contact.name}
      </div>
      <div className="bg-gray-200 p-4 rounded-md mb-2">
        <strong>Phone:</strong> {contact.phone}
      </div>
      <div className="bg-gray-200 p-4 rounded-md mb-2">
        <strong>Email:</strong> {contact.email}
      </div>
      <button
        className="bg-gray-200 p-2 rounded-md mt-2 flex flex-col items-center"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default ContactDetails;

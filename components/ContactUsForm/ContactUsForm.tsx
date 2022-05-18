import React from 'react';

export type ContactUsFormProps = {};

export const ContactUsForm: React.FC<ContactUsFormProps> = (props) => {
  const inputClass = 'rounded-md px-4 py-2 text-xs text-black';
  return (
    <form className="flex w-auto flex-col space-y-4">
      <input
        className={inputClass}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={inputClass}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea className={inputClass} name="comments" placeholder="Comments" />

      <button className="rounded-md bg-white px-4 py-2 text-red-cc0000">
        Submit
      </button>
    </form>
  );
};

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contato() {
  const [state, handleSubmit] = useForm("xjvqjnaz");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mt-4 mb-2">
          Nome
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          className="w-full p-2 border rounded"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mt-4 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="w-full p-2 border rounded"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mt-4 mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border rounded"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting} className="w-full p-2 bg-green-500 text-white rounded mt-4">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contato;

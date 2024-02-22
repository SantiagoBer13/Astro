import React from "react";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
import "./StyleFormSendEmail.css";

export function FormSendEmail() {
  let [variable, setVariable] = React.useState(<span>Enviar Correo</span>);
  const [who, setWho] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState("hidden");

  const callApi = (event) => {
    event.preventDefault();
    console.log(who, title, message);
    setVariable(<span>Enviar Correo <Spinner color="primary" size="sm" /></span>);
    fetch("https://backend-send-email.onrender.com/api/send", {
      method: "POST",
      body: JSON.stringify({
        to: who,
        subject: title,
        text: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al enviar el correo");
        }
        return response.json();
      })
      .then((data) => {
        setWho("")
        setTitle("")
        setMessage("")
        setVariable(<span>Enviar Correo</span>);
        setToast("block") // Restaurar el contenido del botón
      })
      .catch((error) => {
        setVariable(<span>Enviar Correo</span>); // Restaurar el contenido del botón en caso de error
      });
  };

  return (
    <form onSubmit={callApi} id="emailForm">
      <div>
        <label htmlFor="mail">Tu email</label>
        <input
          type="email"
          name="mail"
          id="mail"
          value={who}
          onChange={(e) => setWho(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Titulo del correo</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          name="message"
          id="message"
          className="w-full"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <button className="my-3 text-lg p-4 cursor-pointer font-bold text-[#C54108] border-[#C54108] hover:text-white hover:bg-[#C54108]">
          {variable}
        </button>
      </div>

      <div id="toast-simple" className={`${toast} flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800`} role="alert">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
          </svg>
          <div className="ps-4 text-sm font-normal">Mensaje enviado con éxito.</div>
      </div>

    </form>
    
    
  );
}

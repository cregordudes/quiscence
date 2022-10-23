import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ email_to }) => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setText("");

    emailjs
      .sendForm(
        "service_23aa46o",
        "template_6amlv2a",
        form.current,
        "9NP23fZ5b4eoLW0mP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div class="flex min-h-screen items-center justify-start">
        <div class="mx-auto w-full max-w-lg">
          <h1 class="text-4xl font-medium">Свяжитесь с нами</h1>
          <p class="mt-3">
            Отправьте нам письмо на {email_to} или заполните форму ниже:
          </p>

          <form ref={form} onSubmit={sendEmail} class="mt-10">
            <div class="grid gap-6 sm:grid-cols-2">
              <div class="relative z-0">
                <input
                  type="text"
                  name="user_name"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  onChange={handleName}
                  value={name}
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Имя
                </label>
              </div>
              <div class="relative z-0">
                <input
                  type="text"
                  name="user_email"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  onChange={handleEmail}
                  value={email}
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Email
                </label>
              </div>
              <div class="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  onChange={handleText}
                  value={text}
                />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Ваше сообщение
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 py-2 px-4 w-fit h-12 bgtext-white font-bold  border-b-4 text-white ease-linear transition-all duration-150
        hover:border-0 bg-blue-600 hover:bg-blue-600  border-blue-800 hover:border-transparent rounded"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

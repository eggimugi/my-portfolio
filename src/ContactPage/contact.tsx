import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between  md:px-24 sm:px-10 px-8 py-16">
      {/* Left: Contact Form */}
      <div className="border rounded-lg flex-1 max-w-2xl p-8 md:mr-8 mb-8 md:mb-0 order-2 md-order-1">
        <h2 className="text-2xl font-bold mb-2">Let’s get in touch.</h2>
        <p className="mb-12 text-sm">
          Have a project in mind or just want to say hi? Feel free to drop a
          message!
        </p>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-xs font-bold mb-1 text-gray-500">
                Your name
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                placeholder="Ex. John Doe"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold mb-1 text-gray-500">
                Your Email
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm"
                placeholder="Ex. johndoe@mail.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold mb-1 text-gray-500">
              Message
            </label>
            <textarea
              className="w-full border-b border-gray-300 bg-transparent outline-none py-1 text-sm resize-none"
              rows={3}
              placeholder="Write your message here"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white text-xs px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Right: Contact Info */}
      <div className="flex-1 flex flex-col justify-start max-w-xl order-1 md:order-2">
        <div className="relative flex items-center mb-6">
          <div className="flex items-center mb-4">
            <div className="border border-black/60 rounded-md px-6 py-2 text-xl font-normal relative">
              Contact Me
              <span className="absolute -top-2 -left-1.5 w-3 h-3 rounded-full bg-black"></span>
              <span className="absolute -top-2 -right-1.5 w-3 h-3 rounded-full bg-black"></span>
              <span className="absolute -bottom-2 -left-1.5 w-3 h-3 rounded-full bg-black"></span>
              <span className="absolute -bottom-2 -right-1.5 w-3 h-3 rounded-full bg-black"></span>
            </div>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          You made it to the end — high five!
        </h1>
        <p className="mb-6 text-sm">
          If anything here caught your eye, let’s talk! I’m always up for new
          ideas, fun projects, or just a good convo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="mb-6">
            <div className="mb-2 font-bold text-sm">Let’s talk</div>
            <div className="text-xs text-gray-700">+62 857 4925 7423</div>
          </div>
          <div className="mb-6">
            <div className="mb-2 font-bold text-sm">Where I’m based</div>
            <div className="text-xs text-gray-700">Malang, Indonesia</div>
          </div>
          <div className="mb-6">
            <div className="mb-2 font-bold text-sm">Say hello</div>
            <div className="text-xs text-gray-700">eggimugi03@gmail.com</div>
          </div>
          <div>
            <div className="mb-2 font-bold text-sm">Find me online</div>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Instagram"
                className="text-black hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-black hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62a4.28 4.28 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-black hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.37h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.61z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-black hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.39-3.87-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18v3.24c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

<template>
  <section class="p-6 max-w-7xl mx-auto">
    <div class="py-6 text-center flex justify-center items-center gap-4">
      <span class="flex justify-center w-1/3 h-[1px] bg-black"></span>
      <div class="w-fit">Contact Us</div>
      <span class="flex justify-center w-1/3 h-[1px] bg-black"></span>
    </div>
    <form
      class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow border border-gray-200"
    >
      <h2 class="w-full text-3xl font-bold leading-tight text-center">
        Let's Get In Touch
      </h2>
      <p>
        Have a project in mind or a question to ask? Get in touch with us and
        let&apos;s talk about how we can help bring your ideas to life.
      </p>
      <div>
        <label for="name" class="block mb-1 ml-1">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          required="true"
          class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-[#59bbd4] bg-gray-200"
        />
      </div>
      <div>
        <label for="email" class="block mb-1 ml-1">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your email"
          required="true"
          class="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-[#59bbd4] bg-gray-200"
        />
      </div>
      <div>
        <label for="message" class="block mb-1 ml-1">Message</label>
        <textarea
          id="message"
          type="text"
          placeholder="Message..."
          class="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-[#59bbd4] bg-gray-200"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 focus:ring-[#59bbd4] hover:ring-[#59bbd4] !bg-[#59bbd4] text-white !hover:bg-[#2e7f94]"
        >
          Send
        </button>
      </div>
    </form>
  </section>
</template>

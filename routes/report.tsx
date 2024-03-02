export default function Report() {
  return (
    <div class="container mx-auto px-8">
      <div class="mb-8">
        <h1 class="text-4xl">Report a Code of Conduct Incident</h1>
      </div>
      <div class="mb-8">
        <p>
          You may use this form to anonymously report an incident that may have
          violated our Code of Conduct.The report will go to the devICT Board of
          Directors. The report goes through the servers at formspree.io.
        </p>
      </div>
      <form action="https://formspree.io/f/mwkwyady" method="POST">
        <div class="form-group">
          <label for="report">Issue:</label>
          <textarea
            name="report"
            class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div class="my-2">
          <p class="text-sm">
            If you want a response from the board, please leave some kind of
            contact information here.
          </p>
        </div>
        <div class="form-group flex flex-row gap-2 content-center">
          {/* <div class="flex flex-row gap-2 content-center"> */}
          <label for="from" class="hidden">
            Your Name (optional)
          </label>
          <input
            name="from"
            type="text"
            class="form-control shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Anonymous"
          />
          {/* </div> */}
          <input
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded py-2 px-6"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
}

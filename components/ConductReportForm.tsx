export default function ConductReportForm() {
  return (
    <form action="https://formspree.io/f/mwkwyady" method="POST">
      <div class="form-group">
        <label for="report" class="hidden">
          Issue
        </label>
        <p class="text-sm mb-2">
          Describe what happened, providing any detail that may help the devICT
          board in addressing to situation.
        </p>
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
  );
}

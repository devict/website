import { CSS, render } from "@deno/gfm";
import { Head } from "$fresh/runtime.ts";
import ConductReportForm from "../components/ConductReportForm.tsx";
import { title } from "../lib/title.ts";

const cocMarkdown = await Deno.readTextFile("./CODE_OF_CONDUCT.md");

export default function Conduct() {
  // Append the report form and markdown, so we have consistent text
  // styling with the rest of the markdown.
  const md = `
${cocMarkdown}

## Report an Incident

You may use this form to anonymously report an incident that may have violated our
Code of Conduct. The report will go to the devICT Board of Directors. The report goes
through the servers at formspree.io.
  `;

  const cocHtml = render(md);

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <title>{title("Code of Conduct")}</title>
      </Head>
      <div class="container mx-auto my-8">
        <div
          class="markdown-body"
          style={{ backgroundColor: "transparent" }}
          dangerouslySetInnerHTML={{ __html: cocHtml }}
        >
        </div>
        <div class="my-4">
          <ConductReportForm />
        </div>
      </div>
    </>
  );
}

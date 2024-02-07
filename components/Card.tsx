import { ComponentChildren, JSX } from "preact";

type CardProps = {
  title: string;
  title_size?: "lg" | "xl" | "2xl" | "3xl";
  content?: string | JSX.Element | (string | JSX.Element)[];
  link?: string;
  link_text?: string;
  children?: ComponentChildren;
};

const Card = ({
  title,
  content,
  title_size = "xl",
  link,
  link_text = "",
  children,
}: CardProps) => {
  return (
    <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-stretch">
      <div>
        <h3 class={`text-${title_size} font-medium mb-2`}>{title}</h3>
        {content && !Array.isArray(content) && (
          <p class="text-md mb-2">{content}</p>
        )}
        {content &&
          Array.isArray(content) &&
          content.map((para) => <p class="mb-4">{para}</p>)}
        {children}
      </div>
      {link && (
        <a
          class="bg-ict-orange font-bold mt-4 px-4 py-2 text-white w-auto"
          href={link}
        >
          {link_text ? link_text : "Learn more"}
        </a>
      )}
    </div>
  );
};

export default Card;

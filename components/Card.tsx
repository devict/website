import { ComponentChildren, JSX } from "preact";

type CardProps = {
  title: string;
  content: string | JSX.Element;
  link?: string;
  link_text?: string;
  children: ComponentChildren;
};

const Card = ({ title, content, link, link_text = 'Learn more', children }: CardProps) => {
  return (
    <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-start">
      <div class="w-full">
        <h3 class="text-2xl font-medium mb-2">{title}</h3>
        {content && <p className="text-md">{content}</p>}
        <div class="text-md mb-2">{children}</div>
      </div>
      {link && <a class='bg-ict-orange font-bold mt-4 px-4 py-2 text-white w-auto' href={link}>{link_text}</a>}
    </div>
  );
}

export default Card;

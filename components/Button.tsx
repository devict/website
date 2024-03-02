import { FunctionComponent } from "preact";

type Props = {
  href: string;
  title: string;
  extraClasses?: string;
};

const Button: FunctionComponent<Props> = ({
  children,
  title,
  href,
  extraClasses,
}) => (
  <a
    class={`bg-orange-500 hover:bg-orange-600 text-white font-bold rounded ${extraClasses}`}
    title={title}
    href={href}
  >
    {children}
  </a>
);

export default Button;

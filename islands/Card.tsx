type CardProps = {
  title: string;
  content: string | JSX.Element;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h3 class="text-2xl font-medium mb-2">{title}</h3>
      <div class="text-md mb-2">{children}</div>
    </div>
  );
}

export default Card;

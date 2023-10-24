type CardProps = {
  title: string;
  content: string | JSX.Element;
};

const Card = ({ title, content }: CardProps) => {
  return (
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h3 class="text-xl font-medium mb-2">{title}</h3>
      <p class="text-md mb-2">{content}</p>
    </div>
  );
}

export default Card;

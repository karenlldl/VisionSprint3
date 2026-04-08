type NumerosCardProps = {
  image: string;
  alt: string;
  value: string;
  label: string;
};

const NumerosCard = ({ image, alt, value, label }: NumerosCardProps) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={alt}
        className="w-40 object-contain mb-3 transition-transform duration-300 hover:scale-110"
      />
      <p className="text-[#4e7c11] font-extrabold text-xl my-2">
        <strong>{value}</strong>
      </p>
      <p className="text-gray-600 text-base">{label}</p>
    </div>
  );
};

export default NumerosCard;
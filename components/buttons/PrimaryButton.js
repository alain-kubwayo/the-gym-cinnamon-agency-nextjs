const PrimaryButton = ({ text }) => {
  return (
    <button className="px-8 pt-4 pb-3 text-white border-2 bg-secondary hover:bg-white hover:text-secondary border-secondary">
      {text}
    </button>
  );
};

export default PrimaryButton;

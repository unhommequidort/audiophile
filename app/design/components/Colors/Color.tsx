interface ColorProps {
  bgColor: string;
  hex: string;
  rgb: string;
  hsl: string;
}

const Color = ({ bgColor, hex, rgb, hsl }: ColorProps): JSX.Element => {
  return (
    <div className="text-base font-bold text-black">
      <div className={`mb-4 h-24 w-56 rounded-lg md:w-60 ${bgColor}`}></div>
      <p className="mb-1">
        <span className="mr-16 font-normal opacity-50">HEX</span>
        {hex}
      </p>
      <p className="mb-1">
        <span className="mr-16 font-normal opacity-50">RGB</span>
        {rgb}
      </p>
      <p className="mb-1">
        <span className="mr-16 font-normal opacity-50">HSL</span>
        {hsl}
      </p>
    </div>
  );
};

export default Color;

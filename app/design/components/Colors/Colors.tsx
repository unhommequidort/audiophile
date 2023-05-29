import Color from './Color';
import ColorBorder from './ColorBorder';

const Colors = () => {
  return (
    <section>
      <h2 className="my-14 text-2xl font-semibold uppercase tracking-wider">
        <span className="mr-7 text-peru">01</span> colors
      </h2>

      <div className="flex flex-wrap gap-4">
        <Color
          bgColor="bg-peru"
          hex="#D87D4A"
          rgb="216, 125, 74"
          hsl="22°, 65%, 57%"
        />
        <Color
          bgColor="bg-chinese-black"
          hex="#101010"
          rgb="16, 16, 16"
          hsl="0°, 0%, 6%"
        />
        <Color
          bgColor="bg-anti-flash-white"
          hex="#F1F1F1"
          rgb="241, 241, 241"
          hsl="0°, 0%, 95%"
        />
        <Color
          bgColor="bg-lotion"
          hex="#FAFAFA"
          rgb="250, 250, 250"
          hsl="0°, 0%, 98%"
        />
        <Color
          bgColor="bg-tangelo"
          hex="#fbaf85"
          rgb="251, 175, 133"
          hsl="21°, 94%, 75%"
        />
        <ColorBorder
          bgColor="bg-white"
          hex="#FFFFFF"
          rgb="255, 255, 255"
          hsl="0°, 0%, 100%"
        />
        <Color
          bgColor="bg-black"
          hex="#000000"
          rgb="0, 0, 0"
          hsl="0°, 0%, 0%"
        />
      </div>
    </section>
  );
};

export default Colors;

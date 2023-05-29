import Colors from './components/Colors/Colors';
import Typography from './components/Typography/Typography';

const DesignPage = () => {
  return (
    <div className="container mx-auto px-2 pt-20">
      <h1 className="text-right text-4xl font-semibold uppercase tracking-wide">
        Design system
      </h1>
      <Colors />
      <Typography />
    </div>
  );
};

export default DesignPage;

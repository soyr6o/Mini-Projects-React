import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
      <Accordion />
    </div>
  );
};

export default App;

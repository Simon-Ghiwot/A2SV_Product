import Card from "./components/Card";
import dummy_data from "./Data/dummy_data";
import "./App.css";

const App = () => {
  return (
    <div>
      {dummy_data.map(({ picture, title, author, summary, date }) => (
        <Card
          title={title}
          picture={picture}
          author={author}
          summary={summary}
          date={date}
        />
      ))}
    </div>
  );
};

export default App;

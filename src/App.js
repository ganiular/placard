import './App.scss';
import Contact from './components/Contact/Contact';
import Experiences from './components/Experiences/Experiences';
import Profile from './components/Profile/Profile';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Profile profile={data.profile} />
      <div>
        <main>
          <Experiences experiences={data.experience} />
          <article>{data.bio}</article>
        </main>
        <Contact contact={data.contact} />
      </div>
    </div>
  );
}

export default App;

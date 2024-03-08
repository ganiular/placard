import './App.scss';
import Contact from './components/Contact/Contact';
import Achievements from './components/Achievement/Achievenent';
import Profile from './components/Profile/Profile';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <div className="card">
        <Profile profile={data.profile} />
        <main>
          <Achievements achievements={data.achievements} />
          <article>{data.bio}</article>
          <Contact contact={data.contact} />
        </main>
      </div>
    </div>
  );
}

export default App;

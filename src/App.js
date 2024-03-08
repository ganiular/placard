import './App.scss';
import Contact from './components/Contact/Contact';
import Achievements from './components/Achievement/Achievenent';
import Profile from './components/Profile/Profile';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Profile profile={data.profile} />
      <div>
        <main>
          <Achievements achievements={data.achievements} />
          <article>{data.bio}</article>
        </main>
        <Contact contact={data.contact} />
      </div>
    </div>
  );
}

export default App;

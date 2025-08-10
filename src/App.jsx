import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

// Just a comment!

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h3>Learn & Master GitHub Actions</h3>
      </header>
      <MainContent />
    </>
  );
}

export default App;

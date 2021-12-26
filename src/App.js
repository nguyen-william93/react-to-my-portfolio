import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [currentTab, setTab] = useState('about');

  const renderTab = () => {
    switch (currentTab) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />
      // case 'resume':
      //   return <Resume />
      default:
        return <About />
    }
  }
  return (
    <div>
      <div className="mobile-header">
        <Header currentTab={currentTab} setTab={setTab}></Header>
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

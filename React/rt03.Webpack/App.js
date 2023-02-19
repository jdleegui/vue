import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div class="container">
      <Header>
        <header data-role="header">
          <h1>Header.React</h1>
        </header>
      </Header>

      <section id="page1" data-role="page">
        <div class="content" data-role="content">
          컨텐츠
        </div>
      </section>

      <Footer>
        <footer class="jumbotron text-center" style={{ marginBottom: 0 }}>
          <h1>Footer.React</h1>
        </footer>
      </Footer>
    </div>
  );
}
export default App;

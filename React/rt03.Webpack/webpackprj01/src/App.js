import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Center from './Center';
function App({ ...props }) {
  return (
    <div>
      <Header></Header>
      {/* <section id="page1" data-role="page">
        <div class="content" data-role="content">
          <h1>C</h1>
        </div>
      </section> */}
      <Center></Center>
      <Footer></Footer>
    </div>
  );
}

export default React.memo(App);

import React, { Suspense } from 'react';
import Nav from './components/general/Nav';
import Hero from './components/general/Hero';
// import ProjectDesc from './components/web-projects/ProjectDesc';
// import DesignDesc from './components/graphic-design/DesignDesc';
// import Designs from './components/graphic-design/Designs';
// import IllustrationDesc from './components/illustration/IllustrationDesc';
// import Contact from './components/Contact';
import Footer from './components/general/Footer';

const ProjectDesc = React.lazy(() =>
  import('./components/web-projects/ProjectDesc')
);
const DesignDesc = React.lazy(() =>
  import('./components/graphic-design/DesignDesc')
);
const Designs = React.lazy(() => import('./components/graphic-design/Designs'));

const Illustrations = React.lazy(() =>
  import('./components/illustration/IllustrationDesc')
);
const Contact = React.lazy(() => import('./components/general/Contact'));

function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='content'>
        <Hero />
        <Suspense fallback={<div className='fallback'>Loading...</div>}>
          <ProjectDesc />
          <DesignDesc />
          <Designs />
          <Illustrations />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;

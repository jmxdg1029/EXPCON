import React, {Componenet} from 'react';
import './App.css';
import HeroSection from '../src/components/HeroSection';
import RedSection from './components/RedSection';
import ScrollSnap from 'scroll-snap';
import NavTool from './components/NavTool';
import YellowSection from './components/YellowSection';
import PerksSection from './components/PerksSection';


function callback(){
  console.log('snapped')
}

class App extends React.Component {
container = React.createRef();

bindScrollSnap() {
  const element = this.container.current
  const snapElement = new ScrollSnap(element, {
    snapDestinationY: '100%',
  })
  snapElement.bind(callback)
}

componentDidMount(){
  this.bindScrollSnap()
}

  render(){
    return (
      <div>
        <NavTool />
        <div  id="container" ref={this.container}>
          <HeroSection />
          <RedSection />
          <YellowSection />
          <PerksSection />
        </div>
      </div>
    );
  }
}

export default App;

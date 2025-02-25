import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Join from './component/Join/Join';
import Plans from './component/Plans/Plans';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reasons/Reasons';
import Testimonials from './component/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <Reasons></Reasons>
      <Plans></Plans>
      <Testimonials></Testimonials>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;

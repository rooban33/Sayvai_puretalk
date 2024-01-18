
import './App.css';


function App() {
  function name()
  {
    return <div><h3>SA</h3></div>
  }

  function values()
  {
    return <div>2.00</div>
  }
  return (
    <header>
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*8OF3gEwVkPjcPfnD2fY63A.png"/>
  <div class="topnav-right">
  <nav>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>Credits: {values()}</li>
      <li><b><a>Purchase Credits</a></b></li>
      <li></li>
      <li><button className='round1'>{name()}</button></li>
    </ul>
  </nav>
</div>

  </header>
  );
}

export default App;


import './App.css';


function App() {

  function values()
  {
    return <div>2.00</div>
  }
  return (
    <header>
  <img src="https://media.licdn.com/dms/image/D5603AQHOcsuK1QSt-Q/profile-displayphoto-shrink_800_800/0/1703137619711?e=2147483647&v=beta&t=GW5tHDCzf3Plif4hbEIYe_H5BSZpFCHvg_X-X8bu7wE"/>
  <div class="topnav-right">
  <nav>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>Credits: {values()}</li>
      <li><b><a>Purchase Credits</a></b></li>
    </ul>
  </nav>
</div>

  </header>
  );
}

export default App;

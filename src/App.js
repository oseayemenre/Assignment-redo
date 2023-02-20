import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>MY NAME IS OSE AND I'M LEARNING REACT JS</h1>
          <p>My name is ose and i'm learning react js</p>
          <img src = "https://th.bing.com/th/id/R.16daaa3399969553b9e093e31654b51b?rik=L9Gd7fRTzDKs0A&pid=ImgRaw&r=0" width = "200px" height = "200px"/>
          <a href = "https://www.google.com/"><p>Google</p></a>
          <table>
              <tr>
                  <td>One</td>
                  <td>Two</td>
                  <td>Three</td>
              </tr>

              <tr>
                <td>Four</td>
                <td>Five</td>
                <td>Six</td>
              </tr>

              <tr>
                <td>Seven</td>
                <td>Eight</td>
                <td>Nine</td>
              </tr>
          </table>
      </div>
    );
  }
}

export default App;
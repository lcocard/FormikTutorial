import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles-custom.css";
import "materialize-css/dist/css/materialize.min.css";

const DiagnosisForm4 = () => {
  return (
    <>
      <div class="col s12 m7">
      <h2 class="header">Diagnosis 1</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="https://lorempixel.com/100/190/nature/6"  alt="Diagnosis 1"/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p  class="grey-text text-darken-2 flow-text">I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="https://github.com/Garciat427/Med-2.0/projects/1">Med2.0 Project</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m7">
      <h2 class="header">Diagnosis 2</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="https://lorempixel.com/100/190/nature/6"  alt="Diagnosis 2"/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p  class="grey-text text-darken-2 flow-text">I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="https://github.com/Garciat427/Med-2.0/projects/1">Med2.0 Project</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m7">
      <h2 class="header">Diagnosis 3</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="https://lorempixel.com/100/190/nature/6"  alt="Diagnosis 3"/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p  class="grey-text text-darken-2 flow-text">I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="https://github.com/Garciat427/Med-2.0/projects/1">Med2.0 Project</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m7">
      <h2 class="header">Diagnosis 4</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="https://lorempixel.com/100/190/nature/6"  alt="Diagnosis 4"/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p  class="grey-text text-darken-2 flow-text">I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="https://github.com/Garciat427/Med-2.0/projects/1">Med2.0 Project</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m7">
      <h2 class="header">Diagnosis 5</h2>
      <div class="card horizontal">
        <div class="card-image">
          <img src="https://lorempixel.com/100/190/nature/6"  alt="Diagnosis 5"/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p  class="grey-text text-darken-2 flow-text">I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="https://github.com/Garciat427/Med-2.0/projects/1">Med2.0 Project</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
function App4() {
  return <DiagnosisForm4 />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App4 />, rootElement);
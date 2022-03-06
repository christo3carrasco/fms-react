import Video from "./components/Video";
import Table from "./components/Table";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Votación FMS</h1>
          <p className="text-center">Video de prueba</p>
          <p className="text-center">
            https://www.youtube.com/watch?v=mpZT9e8fcqc
          </p>
        </div>
      </div>
      <Video></Video>
      <Table></Table>
    </div>
  );
}

export default App;

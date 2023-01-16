import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {

  const project = "HAI_3D";

  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl : `build/${project}.loader.js`,
    dataUrl : `build/${project}.data`,
    frameworkUrl : `build/${project}.framework.js`,
    codeUrl : `build/${project}.wasm`,
  });

  return (
    <div className="App">
      <Header />
      {
        isLoaded === false ? (
          <div className="loading-overlay">Cargando... ({Math.round(loadingProgression * 100)}%)</div>
        ) : (
          null
        )
      }
      <Unity unityProvider={unityProvider} style={ { width : 800 , height: 600, border : "3px solid white" } } />
    </div>
  );
}

export default App;

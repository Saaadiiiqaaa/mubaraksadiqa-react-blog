// import logo from './logo.svg';
import './App.css';
import PureCompo from './components/Hoc/PureCompo.js/PureCompo';
import SecondFunc from './components/Hoc/SecondFunc';
import UseContextHook from './components/hooks/UseContextHook';
import UseMemoHook from './components/hooks/UseMemoHook';
import UseReducerHook from './components/hooks/UseReducerHook';
import UseStateHook from './components/hooks/UseStateHook';
import Usecallbackhook from './components/hooks/Usecallbackhpok';
import UseRef from './components/hooks/useref';
import FirstClass from './components/passingprops/FirstClass';
// import FunctionRoutes from './components/FunctionRoutes';
// import FirstClass from './components/passingprops/FirstClass';
// import RenderClass from './components/passingprops/RenderClass';
// import TopNAv from './components/topnavigations';

function App() {
  return (
    <div className="App">
     {/* <FunctionRoutes/> */}
     
     {/* <FirstClass/> */}
     {/* <RenderClass/> */}
{/* <UseStateHook/> */}
{/* <UseContextHook/> */}
{/* <UseReducerHook/> */}
{/* <UseMemoHook/> */}
<Usecallbackhook/>
{/* <UseRef/> */}
{/* <SecondFunc/> */}
{/* <PureCompo/> */}
    </div>
  );
}

export default App;

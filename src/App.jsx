import { useEffect, useState } from "react";
import ClientMaster from "./component/ClientMaster";
import Login from "./component/Login";


function App() {
  const [login, setLogin] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setLogin(true)
    }
    else{
      setLogin(false)
    }
  },[setLogin])
  return (<>
      {login ?
      <ClientMaster setLogin={setLogin}/>
      : <Login setLogin={setLogin} />
}
      </>
  );
}

export default App;


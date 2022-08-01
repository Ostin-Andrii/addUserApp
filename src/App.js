import CreateUser from "./Components/CrateUser";
import UserList from "./Components/UserList";
import { useState } from "react";

const App = () => {

  const [userList, setUserList] = useState([]);

  const userDataHandler = (name, age) => {
    setUserList((prev) => {
      return [...prev, { name: name, age: age, id: Math.random().toString()}];
    });
  };
  
  return (
    <div>
      <CreateUser onChange={userDataHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;

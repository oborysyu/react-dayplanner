import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Context from "./components/Context";
import { useUsersAndTheirTodos } from "./hooks/useUsersAndTheirPlans";


export default function App() {
  const { users, addUser, getUsers, logInUser, signOut, currentUser, funcs } = useUsersAndTheirTodos();
  return (
    <Context.Provider value={{users, addUser, getUsers, logInUser, signOut, currentUser, funcs}}>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes> 
    </Context.Provider> 
  );
}
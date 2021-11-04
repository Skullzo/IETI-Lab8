import { TaskList } from "./components/TaskList";
import { LoginForm } from "./components/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <TaskList />
          </Route>
          <Route path="/auth">
            <LoginForm />
          </Route>
          <Route path="/tasks/:taskId">
            <TaskForm />
          </Route>
          <Route>
            <div>Not found</div>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
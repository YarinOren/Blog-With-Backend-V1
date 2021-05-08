import './App.css';
import TopBar from './Components/TopBar';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import Post from './Pages/Post';
import Login from './Pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#483D8B',
    },
    secondary: {
      main: '#483D8B',
    },
  },
});

function App() {
  return (
    
    <div className="App">      
      <Router>
      <ThemeProvider theme={theme}>
        <TopBar/>
        <Switch>
          <Route path="/about" component={AboutMe}/>
          <Route path="/contact" component={ContactMe}/>
          <Route path="/newpost" component={NewPost}/>
          <Route path="/post/:id" component={Post}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
      </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
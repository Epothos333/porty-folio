import './App.css';
import { Banner } from './components/Banner/Banner';
import { CompanyLogos } from './components/CompanyLogos.js/CompanyLogos';
import { HowWeMight } from './components/HowWeMight/HowWeMight';
import { ProfessionalWork } from './components/ProfessionalWork/ProfessionalWord';
import { Personal } from './components/Personal/Personal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProjectPage } from './components/ProjectPage/ProjectPage';
import { ScrollToTop } from './components/ScrollToTop';

function FrontPage() {
  return (
    <>
      <Banner />
      <CompanyLogos />
      <HowWeMight />
      <ProfessionalWork />
      <Personal />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/project/:id" component={ProjectPage} />
          <Route path="/" component={FrontPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  )
}

export default App;

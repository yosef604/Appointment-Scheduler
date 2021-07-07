import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import AdminOrdersScreen from './screens/AdminOrdersScreen';
import AdminSetHoursScreen from './screens/AdminSetHoursScreen';
import BookingSuccessScreen from './screens/BookingSuccessScreen';


function App() {
  
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Route path='/book/success' component={BookingSuccessScreen} />
          <Route path='/book' component={BookingScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/admin/orders' component={AdminOrdersScreen}/>
          <Route path='/admin/hours' component={AdminSetHoursScreen}/>
          <Route path='/' component={HomeScreen} exact />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

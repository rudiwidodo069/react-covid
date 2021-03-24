import React, { useEffect, useState, createContext } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import './bootstrap.scss';

// component 
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Status from '../components/Status';
import Main from '../components/Main';
import Spread from '../components/Spread';
import Sysmtoms from '../components/Sysmtoms';
import Faq from '../components/Faq';
import Topic from '../components/Topic';
import Footer from '../components/Footer';
import Loading from '../components/Loading';


const CovidContext = createContext();
const CountriesContext = createContext();

function App() {
  const [dataCovid, setDataCovid] = useState({});
  const [dataCountries, setDataCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      Promise.all([
        new Promise((resolve, reject) => {
          fetch('https://corona.lmao.ninja/v2/all?yesterday')
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
        }),
        new Promise((resolve, reject) => {
          fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
        })
      ])
        .then(res => {
          setDataCovid(res[0]);
          setDataCountries(res[1]);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />
  } else {
    return (
      <CovidContext.Provider value={dataCovid}>
        <CountriesContext.Provider value={dataCountries}>
          <Navbar />
          <Jumbotron />
          <Status covidContext={CovidContext} />
          <Main covidContext={CovidContext} countriesContext={CountriesContext} />
          <Spread />
          <Sysmtoms />
          <Faq />
          <Topic />
          <Footer />
        </CountriesContext.Provider>
      </CovidContext.Provider>
    )
  }
}

export default App;

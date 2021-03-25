import React, { useContext, useState } from 'react';

// css custom
import './main.css';

// react-map
import ReactMapGL, { Marker } from 'react-map-gl';

// nomber format
import NumberFormat from 'react-number-format';

export default function Index({ countriesContext }) {

    const countriesProps = useContext(countriesContext);

    const [countries, setCountries] = useState(countriesProps);
    const [keyword, setKeyword] = useState('');
    const [detailOpen, setDetailOpen] = useState(false);
    const [detailLocation, setDetailLocation] = useState({});
    const [currectPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(8);
    const [pageNumberLimit, setPageNumberLimit] = useState(8);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);

    const indexOfLast = currectPage * countriesPerPage;
    const indexOfFirst = indexOfLast - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirst, indexOfLast);

    const sreachCountries = evt => {
        setKeyword(evt.target.value);
        const countries = countriesProps.filter(value => {
            return value.country.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });
        setCountries(countries);
    }

    const paginate = (number) => { setCurrentPage(number) }

    const nextPage = () => {
        setCurrentPage(currectPage + 1);
        if (currectPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const prevPage = () => {
        setCurrentPage(currectPage - 1);
        if ((currectPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    const detail = (open, data) => {
        if (open) {
            setDetailOpen(false);
            setDetailLocation({});
        } else {
            setDetailOpen(true);
            setDetailLocation(data);
        }
    }

    return (
        <section id="main">
            <div className="container">
                <div className="box-main">
                    <div className="row gap-2">
                        <div className="col-8 col-lg">
                            <div className="main-left shadow-sm">
                                <div className="main-title d-flex justify-content-between align-items-center">
                                    <h3>AREA TERPENGARUH COVID-19</h3>
                                </div>
                                <div className="main-maps">
                                    <MapsGl countries={countries} />
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-lg">
                            <div className="main-right">
                                <div className="input-group">
                                    <input type="text" placeholder="memfilter ke suatu lokasi
" name="keyword" className="form-control" value={keyword} onChange={evt => sreachCountries(evt)} />
                                </div>
                                <hr />
                                <div className="locations">
                                    <LocationCountries currentCountries={currentCountries} detail={data => detail(detailOpen, data)} />
                                </div>
                                <div className="paginations">
                                    <Paginations
                                        currentPage={currectPage}
                                        countriesPerPage={countriesPerPage}
                                        totalCountries={countriesProps.length}
                                        paginate={numb => paginate(numb)}
                                        maxPageNumberLimit={maxPageNumberLimit}
                                        minPageNumberLimit={minPageNumberLimit}
                                        next={() => nextPage()}
                                        prev={() => prevPage()} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {detailOpen && <Detail close={() => setDetailOpen(false)} detail={detailLocation} />}
                </div>
            </div>
        </section>
    );
}

export function MapsGl({ countries }) {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: -6.200000,
        longitude: 106.816666,
        zoom: 1.5
    });
    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken='pk.eyJ1IjoicnVkaXdpZCIsImEiOiJja21saWhhMnoxYmhmMnFtdWdocnRmdnJsIn0.wYYpBjjOsQ0x9Kp2AJbn1w'
            mapStyle='mapbox://styles/mapbox/dark-v10'
        >
            {
                countries.map((item, key) => {
                    return (
                        <Marker key={key} latitude={item.countryInfo.lat} longitude={item.countryInfo.long}>
                            <div>
                                <img src={item.countryInfo.flag} style={{ width: 30, height: 30 }} alt="" className="img-thumbnail rounded-circle bg-dark" />
                            </div>
                        </Marker>
                    )
                })
            }
        </ReactMapGL>
    );
}

export function LocationCountries({ currentCountries, detail }) {
    return (
        <>
            {
                currentCountries.map((item, key) => {
                    return (
                        <div key={key} className="location shadow-sm" onClick={() => detail(item)}>
                            <div className="flag">
                                <img src={item.countryInfo.flag} alt={item.country} />
                            </div>
                            <div className="flag-title text-uppercase fw-bold">{item.country}</div>
                            <div className="flag-total">
                                <NumberFormat value={item.cases} displayType={'text'} thousandSeparator={true} prefix={''} /></div>
                        </div>
                    )
                })
            }
        </>
    )
}

export function Paginations({ currentPage, countriesPerPage, totalCountries, paginate, maxPageNumberLimit, minPageNumberLimit, next, prev }) {

    const pageNaumber = [];

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNaumber.push(i);
    }

    return (
        <>
            <nav aria-label="Page navigation example mt-4">
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                        <button className="page-link" tabIndex="-1" onClick={prev} disabled={currentPage === pageNaumber[0] ? true : false} >Previous</button>
                    </li>
                    {

                        pageNaumber.map(number => {
                            if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit - 1) {
                                return (
                                    <li key={number} className="page-item page-number">
                                        <button onClick={() => paginate(number)} className={currentPage === number ? 'page-link active' : 'page-link'}>{number}</button>
                                    </li>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                    <li className="page-item">
                        <button
                            className="page-link"
                            onClick={next}
                            disabled={currentPage === pageNaumber.length ? true : false}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export function Detail({ close, detail }) {
    return (
        <div className="detail">
            <div className="box-detail">
                <div className="close" onClick={close}>X</div>
                <div className="row gap-1">
                    <div className="col-6 col-md">
                        <div className="box-img d-flex justify-content-center align-items-center">
                            <img src={detail.countryInfo.flag} alt="" className="img-thumbnail rounded-circle" />
                        </div>
                        <div className="location-name mb-3 fw-bold text-center text-uppercase">{detail.country}</div>
                        <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                            <div>continent</div>
                            <div className="badge bg-primary">{detail.continent}</div>
                        </div>
                        <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                            <div>lat</div>
                            <div className="badge bg-primary">
                                <NumberFormat value={detail.countryInfo.lat} displayType={'text'} thousandSeparator={true} prefix={''} />
                            </div>
                        </div>
                        <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                            <div>long</div>
                            <div className="badge bg-primary">
                                <NumberFormat value={detail.countryInfo.long} displayType={'text'} thousandSeparator={true} prefix={''} />
                            </div>
                        </div>
                        <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                            <div>population</div>
                            <div className="badge bg-primary">
                                <NumberFormat value={detail.population} displayType={'text'} thousandSeparator={true} prefix={''} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md">
                        <div className="box-casses">
                            <div className="title fw-bold text-dark text-center text-uppercase">
                                cases
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>active</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.active} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>casses</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.cases} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>critical</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.critical} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>deaths</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.deaths} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>recovered</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.recovered} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>tests</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.tests} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>today cases</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.todayCases} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>today deaths</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.todayDeaths} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>today recovered</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.todayRecovered} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                            <div className="country-info d-flex justify-content-between align-items-center text-uppercase">
                                <div>updated</div>
                                <div className="badge bg-primary">
                                    <NumberFormat value={detail.updated} displayType={'text'} thousandSeparator={true} prefix={''} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { PureComponent } from 'react';
//services-api
import {
  getGeoAutodetection,
  getGeolocation,
  getListOfCountry,
  getCityByZip,
  getListUSPorts,
  getListDestinationsPort
} from '../../services/api/location-requests';
import {
  getQuoteCalculationUSA,
  getQuoteCalculationOcean,
} from "../../services/api/quote-calculation";
//context
const { Provider, Consumer: MainConsumer } = React.createContext('');
let countryState;
let countriesList;
let quotaParameters;

class MainProvider extends PureComponent {
  state = {
    isLoading: true,
    countriesList: [],
    loadingQuote: false,
    showModalAbout: false,
    showModalInfo: false,
    changeDestinantion: false,
    addressClient: {},
    addressVehicle: {},
    countryState: {},
    quotaParameters: {},
    newPlaceFullData: null,
    errorClient: false,
    nearestUSAPort: "",
    portInCurrentCountry: "",
    zip: "97218",
    country: "US",
    lot: "31666779",
    vin: "WBA3A5C55DF359066",
    origin_zip: "30052",
    year: "2018",
    make: "FORD",
    model: "FOCUS",
    latitudeVehicle: "45.523064",
    longitudeVehicle: "-122.676483",
  };

  handleOnChangeInputDestination = async place => {
    const { lat, lng } = place.geometry.location;
    const locationLat = lat();
    const locationLng = lng();

    const GeolocationData = await getGeolocation(locationLat, locationLng); // get new place data: {zip, city, state, state_code}
    const newPlaceFullData = GeolocationData.data;
    return this.setState({
      newPlaceFullData,
    });
  };

  handleGetQuote = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const {
        addressClient,
        newPlaceFullData,
        origin_zip,
        vin,
        changeDestinantion,
      } = this.state;

      if (newPlaceFullData && newPlaceFullData.zip) {
        const destination_zip = newPlaceFullData.zip;
        const responseQuota = await getQuoteCalculationUSA({
          origin_zip,
          destination_zip,
          vin,
        }); // get new quota
        quotaParameters = responseQuota.data;

        this.setState({
          changeDestinantion: !this.state.changeDestinantion,
          addressClient: { ...addressClient, ...newPlaceFullData },
          quotaParameters,
          isLoading: false,
        });
      } else {
        return this.setState({
          isLoading: false,
          changeDestinantion: !changeDestinantion,
          newPlaceFullData: null,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        errorClient: true,
      });
      console.error(error, "error");
    }
  };

  handleQuoteCancel = () => {
    const { changeDestinantion } = this.state;
    return this.setState({
      changeDestinantion: !changeDestinantion,
      newPlaceFullData: null,
    });
  };

  toggleModalAbout = () => {
    return this.setState(state => ({ showModalAbout: !state.showModalAbout }));
  };
  toggleModalInfo = () => {
    return this.setState(state => ({ showModalInfo: !state.showModalInfo }));
  };
  toggleModalErr = () => {
    return this.setState(state => ({ errorClient: !state.errorClient }));
  };

  countQuoteForUSA = async data => {
    try {
      let destination_zip;
      const { origin_zip, vin } = this.state;
      countryState = data;

      const responseСountries = await getListOfCountry(); // get list of countries
      countriesList = responseСountries.data;
      const { id, type } = this.handlerFilterByCountry(); // get id and type country
      countryState.id = id;
      countryState.type = type;
      destination_zip = countryState.zip;

      const responseQuota = await getQuoteCalculationUSA({
        origin_zip,
        destination_zip,
        vin,
      });
      quotaParameters = responseQuota.data; // get quota

      const address = await Promise.all([
        getCityByZip(countryState.zip),
        getCityByZip(origin_zip),
      ]);
      const [addressClient, addressVehicle] = address; // get addresses

      this.setState({
        countryState,
        addressClient: addressClient.data,
        addressVehicle: addressVehicle.data,
        quotaParameters,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  countQuoteForInter = async responseData => {
    try {
          let destination_zip,
            listUSPorts,
            nearestUSAPort,
            listDestinationsPort,
            portInCurrentCountry,
            quoteCalculationOcean;
          const { origin_zip, vin } = this.state;
          countryState = responseData.data;
          const responseСountries = await getListOfCountry(); // get list of countries
          countriesList = responseСountries.data;
          // console.log(countriesList[0], "countriesList");
          
          

          const { id, type, name } = this.handlerFilterByCountry(); // get id and type country
          countryState.id = id;
          countryState.type = type;
          countryState.name = name;

          const responseListUSPorts = await getListUSPorts(
            countryState.id,
            this.state.latitudeVehicle,
            this.state.longitudeVehicle
          ); // get list USA ports
          listUSPorts = responseListUSPorts.data;
          nearestUSAPort = listUSPorts[0]; // get nearist port in USA

          const responseListDestinationsPort = await getListDestinationsPort(
            countryState.id
          );
          listDestinationsPort = responseListDestinationsPort.data;
          portInCurrentCountry = listDestinationsPort[0]; // get destination port

          const responseQuoteCalculationOcean = await getQuoteCalculationOcean(
            origin_zip,
            nearestUSAPort.id, 
            portInCurrentCountry.id,
            vin
          ); // get list of countries
          quotaParameters = responseQuoteCalculationOcean.data;



          console.log(quotaParameters, "quotaParameters");

          const address = await getCityByZip(origin_zip);
          const addressVehicle = address.data;                // get addresses vehicle

          this.setState({
            countryState,
            addressClient: portInCurrentCountry,
            addressVehicle,
            nearestUSAPort,
            quotaParameters,
            countriesList,
            isLoading: false,
          });
        } catch (error) {
      console.error(error);
    }
  };

  handlerFilterByCountry = () => {
    const countryInfo = countriesList.filter(
      country => country.iso_2 === countryState.country
    )[0];
    const { id, type, name } = countryInfo;
    return { id, type, name };
  };

  handleChangeDestinantion = () =>
    this.setState(state => ({
      changeDestinantion: !state.changeDestinantion,
    }));

  componentDidMount() {
    getGeoAutodetection()
      .then(response => {
        const { country } = response.data;
        if (country === "US") {
          this.countQuoteForUSA(response);
        } else {
          this.countQuoteForInter(response);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { children } = this.props;
    const {
      isLoading,
      loadingQuote,
      showModalAbout,
      showModalInfo,
      changeDestinantion,
      make,
      model,
      year,
      addressClient,
      addressVehicle,
      quotaParameters,
      errorClient,
      countryState,
      nearestUSAPort,
      countriesList,
    } = this.state;

    return (
      <Provider
        value={{
          isLoading,
          loadingQuote,
          showModalAbout,
          showModalInfo,
          changeDestinantion,
          make,
          model,
          year,
          quotaParameters,
          errorClient,
          countryState,
          addressClient,
          addressVehicle,
          nearestUSAPort,
          countriesList,
          toggleModalAbout: this.toggleModalAbout,
          toggleModalInfo: this.toggleModalInfo,
          handleChangeDestinantion: this.handleChangeDestinantion,
          handleOnChangeInputDestination: this.handleOnChangeInputDestination,
          handleGetQuote: this.handleGetQuote,
          handleQuoteCancel: this.handleQuoteCancel,
          toggleModalErr: this.toggleModalErr,
        }}
      >
        {children}
      </Provider>
    );
  }
}

const TestProvider = Provider;

export { MainProvider, MainConsumer, TestProvider };

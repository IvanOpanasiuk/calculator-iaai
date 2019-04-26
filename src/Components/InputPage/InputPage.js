import React, { Component } from 'react';
import Select from "react-select";
import Autocomplete from 'react-google-autocomplete';
import { MainConsumer } from "../../contexts/ContextMain";
import './InputPage.css';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: "1px dotted pink",
    // color: state.isSelected ? "red" : "blue",
    // padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    // width: 200,
  }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = "opacity 300ms";

  //   return { ...provided, opacity, transition };
  // },
};

let isError = false;
let options;
class InputPage extends Component {
  // handleOnChangeSlecet = (e) => {
    
  // }
  render() {
    return (
      <MainConsumer>
        {({
          countryState,
          countriesList,
          handleOnChangeInputDestination,
          handleGetQuote,
        }) => {
          if (countriesList) {
            options = countriesList.map(country => ({
              value: country.id,
              label: country.name,
            }));
          }

          return (
            <div className="main-delivery-input">
              <form>
                {countryState.type === "D" ? (
                  <Autocomplete
                    style={{ width: "80%" }}
                    onPlaceSelected={place => {
                      handleOnChangeInputDestination(place);
                    }}
                    types={["(regions)"]}
                    componentRestrictions={{ country: "us" }}
                  />
                ) : (
                  <Select
                    options={options}
                    onChange={this.handleOnChangeSlecet}
                    // styles={customStyles}
                  />
                )}
              </form>
              <div className="text-danger">
                {isError ? "This field cannot be blank" : ""}
              </div>
            </div>
          );
        }}
      </MainConsumer>
    );
  }
}

export default InputPage;
import React from "react";
import Select from "react-select";
import {useState} from 'react';

function App() {
  const [value, setValue] = useState(null);

  const options = [
     {value: 'YES', label: 'Yes'},
     {value: 'NO', label: 'No'},
     {value: 'MAYBE', label: 'Maybe'},
     {value: 'NEVER', label: 'Never'},
     {value: 'ALWAYS', label: 'Always'},
  ]

  return (
    <div style={{margin : 20, width: 200}}>
      <Select 
        options={options} 
        defaultValue={value} 
        placeholder='Select Your Item'
        onChange={setValue}
        isMulti
        isSearchable
        noOptionsMessage={() => 'No Item Available'}
        // isDisabled
        
        styles = {{
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: 'gray'
          }),
          clearIndicator: (baseStyles) => ({
            ...baseStyles,
            color: 'red'
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isFocused ? 'red' : 'grey',
            backgroundColor: state.isFocused ? 'black' : 'lightgreen'
          })
        }}


        />
    </div>
  );
}

export default App;











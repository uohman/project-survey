import React, { useState } from 'react';
import StartPage from './StartPage';
import NameQuestion from './NameQuestion';
import SelectQuestion from './SelectQuestion';
import RadioButtons from './RadioButtons';

// Declaring variables that uses State //
const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [selectInput, setSelectInput] = useState('')
  const [radioInput, setRadioInput] = useState('')

  const [step, setStep] = useState(1);

  // Declaring handlers //
  const handleNameInputChange = (event) => {
    setNameInput(event.target.value)
  };
  const handleSelectInputChange = (event) => {
    setSelectInput(event.target.value)
  };
  const handleRadioInputChange = (event) => {
    setRadioInput(event.target.value)
  };
  const handleStepChange = () => {
    setStep(step + 1); /* ++ ? */
  };

  // Declaring what happens in different steps of the survey //
  return (
    <div>
      {step === 1 && <StartPage onStepChange={handleStepChange} />}
      {step === 2 && (
        <NameQuestion
          nameInput={nameInput}
          handleNameInputChange={handleNameInputChange}
          handleStepChange={handleStepChange} />
      )}
      {step === 3 && (
        <SelectQuestion
          selectInput={selectInput}
          handleSelectInputChange={handleSelectInputChange}
          handleStepChange={handleStepChange} />
      )}
      {step === 4 && (
        <RadioButtons
          radioInput={radioInput}
          handleRadioInputChange={handleRadioInputChange}
          handleStepChange={handleStepChange} />
      )}
    </div>
  );
}

export default Form;
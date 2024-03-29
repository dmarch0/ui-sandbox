import React from "react";
import { Field } from "redux-form";
import styled from "styled-components";

const RadioField = ({ options, name, className, label }) => {
  return (
    <div className={className}>
      <label className="group-label">{label}</label>
      {options.map(option => (
        <label htmlFor={option.value} className="container" key={option.value}>
          {option.label}{" "}
          <Field
            component="input"
            type="radio"
            name={name}
            value={option.value}
          />
          <span className="checkmark" />
        </label>
      ))}
    </div>
  );
};

const StyledRadioField = styled(RadioField)`
  margin-bottom: 10px;
  margin-top: 10px;

  .group-label {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 5px;
    margin-top: 10px;
    opacity: 0.6;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 1.3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-left: 35px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.6);

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      left: 0;
      width: 20px;
      height: 20px;
      z-index: 3;
    }

    input:checked ~ .checkmark:after {
      display: block;
    }
    input:checked ~ .checkmark {
      background-color: #2196f3;
    }
    input:checked:hover ~ .checkmark {
      background-color: #2196f3;
    }
    input:hover ~ .checkmark {
      background-color: #ccc;
    }
    .checkmark {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #eee;
      border-radius: 50%;
      transition: all 0.2s ease-in;
    }
    .checkmark:hover {
      background-color: #ccc;
    }
    .checkmark:after {
      content: "";
      display: none;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background-color: white;
    }
  }
`;

export default StyledRadioField;

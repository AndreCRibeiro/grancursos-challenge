import styled from 'styled-components';

export const Container = styled.div`
  input[type="range"] {
  --minRangePercent: 0%;
  --maxRangePercent: 0%;
  height: .4rem;
}
input[type="range"]:invalid {
  box-shadow: none;
  
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: red;
    border: 1px solid #CECECE;
    height: 20px;
    width: 20px;
    border-radius: 50%;
}

.min-max-slider {
  position: relative;
  width: 200px;
  text-align: center;
  margin-top: 10px;
  padding-bottom: 20px;
}

.min-max-slider::focus {
  oultine: none;
}

input::focus {
  outline: none;
}

.min-max-slider > label {
  display: none;
}

.min-max-slider > input {
  cursor: pointer;
  position: absolute;
}

/* webkit specific styling */
.min-max-slider > input {
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none !important;
  background: transparent;
}
.min-max-slider > input.min {
  background-image: linear-gradient(
    to right,
    silver 0%,
    silver var(--minRangePercent),
    red var(--minRangePercent),
    red 100%
  );
}

.min-max-slider > input.max {
  background-image: linear-gradient(
    to right,
    red 0%,
    red var(--maxRangePercent),
    silver var(--maxRangePercent),
    silver 100%
  );
}

.min-max-slider > input::-webkit-slider-runnable-track,
.min-max-slider > input::-moz-range-track,
.min-max-slider > input::-ms-track {
  box-sizing: border-box;
  border: none;
  height: 4px;
  background: orange;
  border-radius: 8px;
  height: 10px;
  background-color: transparent;
  background-image: linear-gradient(orange, orange),
    linear-gradient(orange, orange);
  background-size: var(--sx) 10px, calc(100% - var(--sx)) 4px;
  background-position: left center, right center;
  background-repeat: no-repeat;
}

.min-max-slider > input::focus {
  outline: none;
}

.min-max-slider > input.max::-moz-range-progress {
  background: orange;
  border-radius: 4px;
}

.min-max-slider > input.min::-moz-range-progress {
  height: 0.6em;
  background: silver;
  border-radius: 4px;
}

input[type="range"]::-webkit-slider-thumb,
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none; /* Override default look */
  -moz-appearance: none;
  appearance: none;
  width: 20px; /* Set a specific slider handle width */
  height: 20px; /* Slider handle height */
  background: orange; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border: none;
  color: 1px solid orange;
  border-radius: 5px;
  /* box-shadow: -205px 0 0 200px hsl(100, 100%, 40%); */
}

.min-max-slider > input::-webkit-slider-runnable-track {
  cursor: pointer;
}
`;

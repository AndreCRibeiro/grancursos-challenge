import React, { useLayoutEffect, useState } from "react";
import { Container } from './styles';

var thumbsize = 14;

interface SliderProps {
  min: number;
  max: number;
  onChangeValues: (min: number, max: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, onChangeValues }) => {
  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const width = 260;
  const minWidth =
    thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
  const minPercent = ((minVal - min) / (avg - min)) * 100;
  const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
  const styles = {
    min: {
      width: minWidth,
      left: 0,
      "--minRangePercent": `${minPercent}%`
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      left: minWidth,
      "--maxRangePercent": `${maxPercent}%`
    }
  };

  useLayoutEffect(() => {
    setAvg((maxVal + minVal) / 2);
    onChangeValues(minVal, maxVal);
  }, [minVal, maxVal, onChangeValues]);

  return (
    <Container>
      <div
        className="min-max-slider"
        data-legendnum="2"
        data-rangemin={min}
        data-rangemax={max}
        data-thumbsize={thumbsize}
        data-rangewidth={width}
      >
        <label htmlFor="min">Minimum price</label>
        <input
          id="min"
          className="min"
          style={styles.min}
          name="min"
          type="range"
          step="100"
          min={min}
          max={avg}
          value={minVal}
          onChange={({ target }) => setMinVal(Number(target.value))}
        />
        <label htmlFor="max">Maximum price</label>
        <input
          id="max"
          className="max"
          style={styles.max}
          name="max"
          type="range"
          step="1"
          min={avg}
          max={max}
          value={maxVal}
          onChange={({ target }) => setMaxVal(Number(target.value))}
        />
      </div>
    </Container>

  );
};

export default Slider;
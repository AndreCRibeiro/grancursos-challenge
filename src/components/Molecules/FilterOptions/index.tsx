import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import * as Atoms from '../../Atoms';
import Button from '../Button';

import { Container, CategoryText, CategorySeparator, RangeDiv } from './styles';

interface FilterOptionsProps {
  onClickClose?: () => void;
}


const FilterOptions: React.FC<FilterOptionsProps> = ({ onClickClose }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const isTablet = useMediaQuery({ query: '(max-width: 820px)' })

  function handleChangeValuesOnrange(min: number, max: number) {
    setMinValue(min);
    setMaxValue(max);
  }

  return (
    <>
      <Container>
        {isTablet && <FiX onClick={onClickClose} />}
        <CategoryText>Multi Range</CategoryText>
        <Atoms.RadioInput label="$10" value={10} />
        <Atoms.RadioInput label="$10 - $100" value={100} />
        <Atoms.RadioInput label="$100 - $500" value={500} />
        <Atoms.RadioInput label="$500+" value={501} />
        <Atoms.RadioInput label="All" value={0} />
        <CategorySeparator />
        <RangeDiv>
          <CategoryText>Slider</CategoryText>
          <span>{minValue} - {Math.round(maxValue)}</span>
        </RangeDiv>
        <Atoms.Slider min={0} max={5000} onChangeValues={(min, max) => handleChangeValuesOnrange(min, max)} />
        <CategorySeparator />
        <CategoryText>Category</CategoryText>
        <div>
          <Atoms.Checkbox label="Cell Phones" numberOfElements={1920} />
          <Atoms.Checkbox label="Computers & Tablets" numberOfElements={1920} />
          <Atoms.Checkbox label="Cell Phone Accessories" numberOfElements={1920} />
          <Atoms.Checkbox label="Appliances" numberOfElements={1920} />
          <Atoms.Checkbox label="Audio" numberOfElements={1920} />
          <Atoms.Checkbox label="iPhone Accessories" numberOfElements={1920} />
          <Atoms.Checkbox label="Cameras & camcorders" numberOfElements={1920} />
          <Atoms.Checkbox label="iPhone Cases & Clips" numberOfElements={1920} />
          <Atoms.Checkbox label="TV & Home Theater" numberOfElements={1920} />
          <Atoms.Checkbox label="Small Kitchen Appliances" numberOfElements={1920} />
        </div>
        <CategorySeparator />
        <CategoryText>Brand</CategoryText>
        <div>
          <Atoms.Checkbox label="Insigni" numberOfElements={1920} />
          <Atoms.Checkbox label="Samsung" numberOfElements={1920} />
          <Atoms.Checkbox label="Apple" numberOfElements={1920} />
          <Atoms.Checkbox label="HP" numberOfElements={1920} />
          <Atoms.Checkbox label="Sony" numberOfElements={1920} />
          <Atoms.Checkbox label="Metra" numberOfElements={1920} />
          <Atoms.Checkbox label="Dyne" numberOfElements={1920} />
          <Atoms.Checkbox label="LG" numberOfElements={1920} />
          <Atoms.Checkbox label="Canon" numberOfElements={1920} />
          <Atoms.Checkbox label="Speck" numberOfElements={1920} />
        </div>
        <CategorySeparator />
        <CategoryText>Rating</CategoryText>
        <Atoms.Rating numberOfStars={5} numberOfElements="8500" />
        <Atoms.Rating numberOfStars={4} numberOfElements="3250" />
        <Atoms.Rating numberOfStars={3} numberOfElements="1120" />
        {isTablet && <Button buttonText='CLEAR ALL FILTERS' />}
      </Container>
      {!isTablet && <Button buttonText='CLEAR ALL FILTERS' />}
    </>
  );
};

export default FilterOptions;

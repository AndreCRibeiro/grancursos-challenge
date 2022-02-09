import { useState, useEffect } from 'react';

import { Container } from './styles';

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  value?: string;
  error?: string;
  customWidth?: string;
  showError?: boolean;
  placeholderText?: string;
  changeState: (option: string) => void;
};

const DropDown: React.FC<Props> = ({
  options,
  value,
  placeholderText,
  changeState,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    if (selected) changeState(selected);
    if (value) {
      const element = document.getElementById(value);
      if (element) {
        (element as HTMLInputElement).value = selected as string;
      }
    }
  }, [selected, value, changeState]);


  return (
    <Container isOpen={isOpen}>
      <select id={value} className="html-select">
        {options.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div
        onClick={() => {
          setOpen(prev => !prev);
        }}
        className="custom-select-wrapper"
      >
        <div className={`custom-select ${isOpen && 'open'}`}>
          <div className="custom-select__trigger">
            <span>
              {options.find(item => item.value === selected)?.label ||
                placeholderText}
            </span>
            <div className="arrow"></div>
          </div>
          <div className="custom-options">
            {options.map(item => (
              <div
                key={item.value}
                onClick={() => {
                  setSelected(item.value);
                }}
                className="option-container"
              >
                <span
                  className={`custom-option ${selected === item.value && 'selected'
                    } `}
                  data-value={item.value}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DropDown;

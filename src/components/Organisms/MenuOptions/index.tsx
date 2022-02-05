import React from 'react';
import {
  FiHome,
  FiCircle,
  FiCalendar,
  FiMail,
  FiCheckSquare,
  FiMessageSquare,
  FiDroplet,
  FiCreditCard,
  FiLayout,
  FiArchive,
  FiGrid,
  FiCopy,
  FiSidebar,
  FiFileText,
  FiCheckCircle
} from 'react-icons/fi';

import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';

import { Container } from './styles';


const MenuOptions: React.FC = () => {
  return (
    <Container>
      <Atoms.Logo />
      <Molecules.OptionComponent icon={<FiHome />} text="Dashboard" selected isDropable />
      <Molecules.OptionComponent icon={<FiCircle />} text="eCommerce" />

      <Atoms.Text text="APPS" isAtMenuOptions />
      <Molecules.OptionComponent icon={<FiMail />} text="Email" />
      <Molecules.OptionComponent icon={<FiMessageSquare />} text="Chat" />
      <Molecules.OptionComponent icon={<FiCheckSquare />} text="Todo" />
      <Molecules.OptionComponent icon={<FiCalendar />} text="Calendar" />

      <Atoms.Text text="UI ELEMENTS" isAtMenuOptions />
      <Molecules.OptionComponent icon={<FiLayout />} text="Grid" isDropable />
      <Molecules.OptionComponent icon={<FiDroplet />} text="Colors" />
      <Molecules.OptionComponent icon={<FiCreditCard />} text="Card" isDropable />
      <Molecules.OptionComponent icon={<FiGrid />} text="Table" />
      <Molecules.OptionComponent icon={<FiArchive />} text="Components" isDropable />

      <Atoms.Text text="FORMS" isAtMenuOptions />
      <Molecules.OptionComponent icon={<FiCopy />} text="Form Elements" isDropable />
      <Molecules.OptionComponent icon={<FiSidebar />} text="Form Layouts" />
      <Molecules.OptionComponent icon={<FiFileText />} text="Form Wizard" />
      <Molecules.OptionComponent icon={<FiCheckCircle />} text="Form Validation" />
    </Container>
  );
};

export default MenuOptions;

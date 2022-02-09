import React, { useState } from 'react';

// Icons & Pictures
import AvatarSvg from '../../../assets/img/Avatar.svg';

import { Container, StatusOptionsFrame, StatusRepresentation } from './styles';

interface AvatarProps {
  onChangeStatus: (status: string) => void;
}

const Avatar: React.FC<AvatarProps> = ({ onChangeStatus }) => {
  const [statusOptionsFrame, setStatusOptionsFrame] = useState(false);
  const [statusType, setStatusType] = useState<'Available' | 'Away' | 'Invisible'>('Available');

  function handleStatusOption(status: 'Available' | 'Away' | 'Invisible') {
    setStatusOptionsFrame(false);
    setStatusType(status);
    onChangeStatus(status);
  }

  return (
    <>
      <Container
        src={AvatarSvg}
        alt="Logo GranCursos"
        onClick={() => setStatusOptionsFrame(!statusOptionsFrame)}
      />
      <StatusRepresentation statusType={statusType || 'Available'} />
      <StatusOptionsFrame showFrame={statusOptionsFrame} data-testid="logout_button">
        <button type="button" onClick={() => handleStatusOption('Available')}>
          Available
        </button>
        <button type="button" onClick={() => handleStatusOption('Away')}>
          Away
        </button>
        <button type="button" onClick={() => handleStatusOption('Invisible')}>
          Invisible
        </button>
      </StatusOptionsFrame>
    </>
  );
};

export default Avatar;

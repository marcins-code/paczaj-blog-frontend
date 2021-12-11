import React from 'react';

interface Props {
  iconName: string;
  iconSize?: string;
  spin: boolean;
  moreClasses?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const IconIcomoon: React.FC<Props> = ({
  iconName,
  iconSize = '1x',
  spin,
  moreClasses,
  onClick,
}) => (
  <span
    data-testid="iconmoon"
    role="none"
    onClick={onClick}
    className={[
      `icon-${iconName}`,
      spin ? 'icon-spin' : '',
      `icon-${iconSize}`,
      `${moreClasses}`,
    ].join(' ')}
  />
);

export default IconIcomoon;

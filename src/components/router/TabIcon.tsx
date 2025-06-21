
import React from 'react';
import { FAVOURITE, HOME, PROFILE, SEARCH } from '../../utils/routes';
import { Heart, Home2, SearchNormal, User, Home } from 'iconsax-react-native';

type Props = RouteType<'tabIcon'>;

const TabIcon: React.FC<Props> = ({ name, size, color, focused }) => {
  switch (name) {
    case HOME:
      return (
        <Home2
          color={color}
          variant={focused ? 'Bold' : 'outline'}
          size={size}
        />
      );
    case SEARCH:
      return (
        <SearchNormal
          color={color}
          variant={focused ? 'Bold' : 'outline'}
          size={size}
        />
      );
    case FAVOURITE:
      return (
        <Heart
          color={color}
          variant={focused ? 'Bold' : 'outline'}
          size={size}
        />
      );
    case PROFILE:
      return (
        <User
          color={color}
          variant={focused ? 'Bold' : 'outline'}
          size={size}
        />
      );
    default:
      return <Home />;
  }
};

export default TabIcon;

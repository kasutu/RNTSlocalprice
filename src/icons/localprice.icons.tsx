import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons.js';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';

const arrowBack = <Icon name="arrow-back" size={30} color="black" />;
const addIcon = <Icon name="add" size={25} color="white" />;
const eyeIcon = <Icon name="remove-red-eye" size={20} color="black" />;
const solidProfileIcon = (
  <Ionicon name="person-circle" color="black" size={30} />
);
const solidHomeIcon = <Ionicon name="home" color="black" size={30} />;
const hollowHomeIcon = <Ionicon name="home-outline" color="black" size={30} />;
const solidChatIcon = (
  <Ionicon name="chatbubble-sharp" color="black" size={30} />
);
const hollowChatIcon = (
  <Ionicon name="chatbubble-outline" color="black" size={30} />
);
const solidBagIcon = (
  <MaterialCommunityIcons name="shopping" color="black" size={30} />
);
const hollowBagIcon = (
  <MaterialCommunityIcons name="shopping-outline" color="black" size={30} />
);
const solidNotifIcon = <Ionicon name="notifications" color="black" size={30} />;
const hollowNotifIcon = (
  <Ionicon name="notifications-outline" color="black" size={30} />
);

export {
  arrowBack,
  addIcon,
  eyeIcon,
  solidProfileIcon,
  solidHomeIcon,
  hollowHomeIcon,
  solidChatIcon,
  hollowChatIcon,
  solidBagIcon,
  hollowBagIcon,
  solidNotifIcon,
  hollowNotifIcon
};

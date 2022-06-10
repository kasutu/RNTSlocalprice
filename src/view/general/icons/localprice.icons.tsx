import AntDesignIcon from 'react-native-vector-icons/AntDesign.js';
import Icon from 'react-native-vector-icons/MaterialIcons.js';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';

const arrowBack = <Icon name="arrow-back" size={30} color="black" />;
const addIcon = <Icon name="add" size={25} color="white" />;
const eyeIcon = <Icon name="remove-red-eye" size={20} color="black" />;
const solidProfileIcon = (
  <Ionicon name="person-circle" color="black" size={30} />
);
const hollowProfileIcon = (
  <Ionicon name="ios-person-circle-outline" color="black" size={30} />
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

const LocationIcon = <Icon name="location-on" color="red" size={40} />;

const SendIcon = <Ionicon name="send" color="black" />;
const CameraIcon = <Ionicon name="camera" color="black" />;
const searchIcon = <Ionicon name="search" color="black" size={20} />;

export {
  searchIcon,
  arrowBack,
  addIcon,
  eyeIcon,
  solidProfileIcon,
  hollowProfileIcon,
  solidHomeIcon,
  hollowHomeIcon,
  solidChatIcon,
  hollowChatIcon,
  solidBagIcon,
  hollowBagIcon,
  solidNotifIcon,
  hollowNotifIcon,
  LocationIcon,
  SendIcon,
  CameraIcon
};

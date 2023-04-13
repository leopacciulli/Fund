import {RouteProp} from '@react-navigation/native';
import {Fund} from '../models/interfaces/funds.interface';

export type RootStackParamList = {
  SignUp: undefined;
  Login: {firstNameValue: string; lastNameValue: string} | undefined;
  Home: undefined;
  Trade: undefined;
  Account: undefined;
  FundDetails: {fund: Fund};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

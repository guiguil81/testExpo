import { useNavigation as useNavigationOriginal } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RoutesParams = {
  Home: undefined;
  Menu: undefined;
};

export const useNavigation = (): NativeStackNavigationProp<RoutesParams> => {
  return useNavigationOriginal<NativeStackNavigationProp<RoutesParams>>();
};

import { RouteProp, useNavigation } from '@react-navigation/core';
import { ReactElement, VFC } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView, SafeAreaView } from 'react-native';

import { RoutesParams } from '../../navigation/navigation-utilities';
import { palette } from '../../theme/palette';
import { actions } from './MenuActions';
import { MenuItem } from './MenuItem';

export type TypoTypes = {
  lineHeight?: number;
  letterSpacing?: number;
  size: number;
};

export type AnimType = '1' | '2' | '3';

export interface MenuAction {
  label: string;
  color: string;
  fontFamily?: string;
  backgroundColor: string;
  typo: TypoTypes;
  icon?: ReactElement;
  animation: AnimType;
  route: string;
  onPress?: () => void;
  disableLink?: boolean;
}

export interface MenuProps {
  route: RouteProp<RoutesParams, 'Menu'>;
}

export const Menu: VFC<MenuProps> = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.topBar}>
        <Pressable onPress={goBack}>
          <Text style={styles.closeButton}>Fermer</Text>
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItem actions={actions} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    height: '100%',
    width: '100%',
  },

  topBar: {
    padding: 20,
  },

  closeButton: {
    color: palette.blue,
    fontSize: 20,
  },
});

import { RouteProp } from '@react-navigation/core';
import React, { VFC } from 'react';
import { Text, SafeAreaView, Pressable, StyleSheet, View, ScrollView } from 'react-native';

import { RoutesParams, useNavigation } from '../navigation/navigation-utilities';
import { palette } from '../theme/palette';

export interface HomeProps {
  route: RouteProp<RoutesParams, 'Home'>;
}

export const Home: VFC<HomeProps> = () => {
  const navigation = useNavigation();

  const openMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 24 }}>
        <Text>Home</Text>
        <View style={{ marginTop: 30 }}>
          <Pressable onPress={openMenu}>
            <Text style={styles.menuButtonText}>Menu</Text>
          </Pressable>

          <View
            style={{
              height: 211,
              width: 227,
              backgroundColor: palette.greenGrass,
              borderRadius: 30,
              borderColor: palette.blue,
              borderWidth: 1,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  menuButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: palette.blue,
  },
});

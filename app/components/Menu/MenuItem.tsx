import { ReactNode, VFC } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

import { MenuAction } from './Menu';

export interface MenuItemProps {
  actions: MenuAction[];
}

export const MenuItem: VFC<MenuItemProps> = ({ actions }) => {
  const actionsJSX = actions?.map<ReactNode>((action) => {
    if (!action.label) return null;

    return (
      <Pressable
        key={action.route}
        style={[styles.item, { backgroundColor: action.backgroundColor }]}
        onPress={action.onPress}>
        {action.icon ? <View style={styles.icon}>{action.icon}</View> : null}
        <Text
          style={[
            styles.label,
            {
              color: action.color,
              fontFamily: action.fontFamily,
              lineHeight: action.typo.lineHeight,
              letterSpacing: action.typo.letterSpacing,
              fontSize: action.typo.size,
            },
          ]}>
          {action.label}
        </Text>
      </Pressable>
    );
  });
  return <>{actionsJSX}</>;
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 13,
    alignItems: 'center',
    borderRadius: 80,
    paddingHorizontal: 45,
    paddingVertical: 35,
    alignSelf: 'center',
    height: 108,
  },

  icon: {
    marginRight: 12,
  },

  label: {
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

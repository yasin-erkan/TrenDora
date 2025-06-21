import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../theme/colors';

interface WidgetHeaderProps {
  widget: any;
  handleNavigate: () => void;
}

const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  widget,
  handleNavigate,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{widget.title}</Text>

      <Pressable onPress={handleNavigate}>
        <Text style={styles.seeAll}>See All</Text>
      </Pressable>
    </View>
  );
};

export default WidgetHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.BLACK,
  },
  seeAll: {
    fontSize: 20,
    color: colors.PRIMARY,
  },
});

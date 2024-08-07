import { Avatar } from '@piccy/native';
import { ScrollView, StyleSheet, View } from 'react-native';

const ITEM_STATE = 12;

const data = Array.from(Array(200).keys());

export default (): JSX.Element => (
  <View style={styles.wrapper}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {data.map((_) => (
        <Avatar key={_} size="lg" value={_.toString()} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: ITEM_STATE * 3,
    paddingHorizontal: ITEM_STATE / 2,
  },
  contentContainer: {
    gap: ITEM_STATE,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: ITEM_STATE,
    paddingVertical: ITEM_STATE,
    paddingHorizontal: ITEM_STATE / 2,
  },
});

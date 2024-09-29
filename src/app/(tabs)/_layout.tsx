import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Title } from 'src/components/Title';
import { appTheme } from 'src/config/theme';
import { width } from 'src/utils/dimensions';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: appTheme.secondary }}>
      <Tabs.Screen
        name="index"
        options={{
          header: () => (
            <View style={styles.titleContainer}>
              <Title text="Create post" />
            </View>
          ),
          title: 'Create post',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-circle" color={color} />
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          header: () => (
            <View style={styles.titleContainer}>
              <Title text="Posts" />
            </View>
          ),
          title: 'Posts',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="th-list" color={color} />
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.background
  }
});

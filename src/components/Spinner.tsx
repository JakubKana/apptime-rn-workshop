import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { appTheme } from 'src/config/theme'

export const Spinner = () => {
  return (
    <View style={styles.spinner} testID="spinner">
      <ActivityIndicator testID="activity-indicator" color={appTheme.highlight} size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    backgroundColor: appTheme.background,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

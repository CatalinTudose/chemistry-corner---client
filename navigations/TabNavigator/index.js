import { createBottomTabNavigator } from "@react-navigation/tabs";
import Icon from "react-native-vector-icons/FontAwesome";

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default TabNavigator;

import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{drawerLabel: "Activity Log", title: "Activity Log"}}
                    />
                <Drawer.Screen
                    name="today"
                    options={{drawerLabel: "Today's Log", title: "Today's Log"}}
                    />
            </Drawer>
        </GestureHandlerRootView>
    );
}
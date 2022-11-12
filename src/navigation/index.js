import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./tabs.navigation";

const AppNavigator = ()=>{
    return(
        <NavigationContainer>
            <TabsNavigator/>
        </NavigationContainer>
    )
}

export default AppNavigator;
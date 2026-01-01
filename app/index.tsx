import { View, Text } from "react-native";
import { globalStyles } from "@/styles/gloabalStyles";
import CustomText from "@/components/Customtext";

const Index = () => {
  return (
    <View style={globalStyles.calculatorcontainer}>
      <Text style={globalStyles.mainResults}>50 x 50</Text>
      <Text style={globalStyles.subResult}>250</Text>
      <CustomText />
    </View>
  );
};

export default Index;

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
        className="w-full h-full flex justify-center align-center bg-red-700">
      <Text className="text-blue-600 font-bold text-lg bg-red-400">Welcome Home</Text>
    </View>
  );
}

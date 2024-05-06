import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/colors";
import { Coordinate } from "../types/types";

interface SnakeProps {
  snake: Coordinate[];
}

export default function Snake({ snake }: SnakeProps): JSX.Element {
  return (
    <Fragment>
      {snake.map((segment: any, index: number) => {
        const segmentStyle = {
          left: segment.x * 10, // adjust for the size of each segment
          top: segment.y * 10,
        };
        return <View key={index} style={[styles.snake, segmentStyle]} />;
      })}
    </Fragment>
  );
}
const styles = StyleSheet.create({
  snake: {
    width: 18,
    height: 18,
    fontSize: 20,
    borderRadius: 9,
    backgroundColor: Colors.primary,
    position: "absolute",
  },
});

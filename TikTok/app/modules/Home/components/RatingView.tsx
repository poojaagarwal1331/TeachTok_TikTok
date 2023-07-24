import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../utils";
import { RatingProps } from "../types/RatingProps";
import { Strings } from "../../../constants";
import styles from "../styles/FollowingListItemStyles";

const RatingView = ({ rating, onPress }: RatingProps) => {
  const ratingData = [Colors.orangeRating, Colors.mellowRating, Colors.yellowRating, Colors.darkGreenRating, Colors.greenRating];

  return (
    <View style={styles.ratingViewStyle}>
      <Text style={styles.ratingHeadingStyle}>
        {Strings.ratingHeading}
      </Text>
      <View style={styles.ratingMainContainerStyle}>
        {rating ? (
          <TouchableOpacity style={[{ backgroundColor: ratingData[rating - 1] }, styles.selectedRatingContainerStyle]} disabled={true}>
            <Text style={styles.selectedRatingTextStyle}>{rating}</Text>
          </TouchableOpacity>
        ) : (
          ratingData.map((data, index) => (
            <TouchableOpacity key={index} style={[{ backgroundColor: data }, styles.ratingContainerStyle]} onPress={() => onPress(index + 1)}>
              <Text style={styles.ratingTextStyle}>{index + 1}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </View>
  );
};

export default RatingView;

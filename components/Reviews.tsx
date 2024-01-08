import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getReviews } from "../utils/api";
import { useGlobalSearchParams } from "expo-router";
import { Review } from "../types/front-end";

export const Reviews = () => {
  const { music_id } = useGlobalSearchParams();
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    const doThis = async () => {
      const reviewData = await getReviews(music_id as string);
      setReviews(reviewData);
    };
    doThis();
  }, []);

  return (
    <View>
      <Text className="mt-10 text-center">REVIEWS</Text>

      {reviews?.map((review: Review) => {
        return (
          <View className="border-2 border-rose-500">
            <Text>Name: {review.screen_name}</Text>
            <Text>Rating: {review.rating}</Text>
            <Text>Title: {review.review_title}</Text>
            <Text>Body: {review.review_body}</Text>
            <Text>Posted On: {review.created_at?.substring(0, 10)}</Text>
          </View>
        );
      })}
    </View>
  );
};

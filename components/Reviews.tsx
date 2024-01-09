import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getReviews } from "../utils/api";
import { useGlobalSearchParams } from "expo-router";
import { Review } from "../types/front-end";
import ReviewModal from "./ReviewModal";

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
    <>
      <ReviewModal setReviews={setReviews} />
      <View>
        <Text className="mt-10 text-center font-bold text-lg">REVIEWS</Text>
        {reviews?.map((review: Review) => {
          return (
            <View
              key={Math.random()}
              className="my-2 mx-3 bg-slate-50 p-2 shadow"
            >
              <Text className="py-1 font-semibold ">
                {review.username} : Rating: {review.rating}
              </Text>
              <Text className="italic py-1">{review.review_title}</Text>
              <Text className="mb-2">{review.review_body}</Text>
              <Text className="text-xs">
                Posted On: {review.created_at?.substring(0, 10)}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

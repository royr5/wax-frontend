import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Alert, Modal, Text, Pressable, View, TextInput } from "react-native";
import { postReview } from "../utils/api";
import { useGlobalSearchParams } from "expo-router";
import { useUserData } from "../app/contexts/UserContent";
import { Review } from "../types/front-end";
import { AntDesign } from "@expo/vector-icons";

interface Iprops {
  setReviews: Function;
}

const ReviewModal = (props: Iprops) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);

  const { music_id } = useGlobalSearchParams();

  const { user } = useUserData();

  const handleTitle = (input: string) => {
    setTitle(input);
  };
  const handleBody = (input: string) => {
    setBody(input);
  };

  const handleSubmit = async () => {
    if (title && body && rating) {
      try {
        const postedReview = await postReview(music_id as string, {
          screen_name: user.username,
          rating: rating,
          review_title: title,
          review_body: body,
        });

        setModalVisible(!modalVisible);
        setRating(0);

        props.setReviews((currentReviews: Review[]) => {
          return [
            {
              screen_name: user.username,
              rating: rating,
              review_title: title,
              review_body: body,
              created_at: new Date().toISOString(),
            },
            ...currentReviews,
          ];
        });
      } catch (err) {
        console.log("🚀 ~ file: ReviewModal.tsx:33 ~ handleSubmit ~ err:", err);
      }
    } else {
      let errorMessage = "Please fill in the following:";
      if (!rating) errorMessage += "\n- Rating";
      if (!title) errorMessage += "\n- Title";
      if (!body) errorMessage += "\n- Body";

      Alert.alert("Incomplete Review", errorMessage, [
        { text: "OK", onPress: () => console.log("close") },
      ]);
    }
  };

  const reviewScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="w-[90%] mx-[5%] h-[60%] bg-slate-300 absolute inset-x-0 bottom-0 rounded-t-xl p-2 shadow-2xl">
          <View>
            <Pressable
              className="justify-self-end ml-[94%]"
              onPress={() => {
                setModalVisible(!modalVisible);
                setRating(0);
              }}
            >
              <AntDesign name="close" size={24} color="black" />
            </Pressable>

            <View>
              <Slider
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor="#16b946"
                maximumTrackTintColor="#000000"
                onValueChange={setRating}
                className="h-10 my-2"
                step={1}
                value={rating}
              />
              <Text>{rating}</Text>
            </View>

            <TextInput
              className="bg-white p-2 m-3 h-10 rounded-md"
              placeholder="Enter a catchy title for your review"
              placeholderTextColor={"#0008"}
              value={title}
              onChangeText={handleTitle}
            />
            <TextInput
              className="bg-white p-2 m-3 rounded-md min-h-fit"
              placeholder="Share your thoughts about the music here"
              placeholderTextColor={"#0008"}
              value={body}
              numberOfLines={4}
              onChangeText={handleBody}
              multiline={true}
            />
            <Pressable
              onPress={handleSubmit}
              className="bg-red-200 w-40 p-6 rounded-md mx-auto"
            >
              <Text className="text-center">Submit Review</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        className="bg-red-200 w-40 p-6 rounded-md mx-auto mt-3"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-center">Write a Review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewModal;

import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import getMusic from '../../../utils/api'
import { Music } from '../../../types/front-end'

const Albums = () => {
  const [music, setMusic] = useState<Music[]>([])
  useEffect(() => {
    const doThis = async () => {
      const musicData = await getMusic()
      setMusic(musicData)
    }
    doThis()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView className="flex flex-col  bg-gray-300">
      <View className='flex flex-wrap'>
        {music.map((track: Music) => (
          <View className="flex flex-col w-1/2 text-center items-center m-auto content-center bg-white p-10 rounded-lg">
            <Link
              href={{
                pathname: `/(public)/music/${track.music_id}`,
                params: { music_id: track.music_id },
              }}
            >
              <Image
                className="w-40 h-40  justify-self-center self-center"
                source={{ uri: track.album_img }}
             
              />
            </Link>
            <Text className="text-center py-5">{track.artist_names} </Text>
            <Text className="text-center ">{track.name} </Text>
          </View>
        ))}
          </View>
      </ScrollView>
    
    </SafeAreaView>
  )
}

export default Albums



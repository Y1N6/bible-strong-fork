import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import { withTheme } from 'emotion-theming'

import useDimensions, { maxWidth } from '~helpers/useDimensions'
import Image from '~common/ui/Image'
import Link, { LinkBox } from '~common/Link'
import Box from '~common/ui/Box'
import Text from '~common/ui/Text'
import { FeatherIcon } from '~common/ui/Icon'
import Empty from '~common/Empty'
import Loading from '~common/Loading'
import { ActivityIndicator } from 'react-native-paper'

const AnimatableBox = Animatable.createAnimatableComponent(Box)

const ShowMoreImage = ({ imageUrls, verseOfTheDay, theme, open, setOpen }) => {
  let {
    screen: { width },
  } = useDimensions()
  const [shareIsLoading, setShareIsLoading] = useState(false)

  width = maxWidth(width)

  const shareImage = async () => {
    if (shareIsLoading) {
      return
    }
    setShareIsLoading(true)
    const path = `${FileSystem.documentDirectory}${verseOfTheDay.v}.jpeg`
    const imageFile = await FileSystem.getInfoAsync(path)

    if (!imageFile.exists) {
      const { uri } = await FileSystem.downloadAsync(imageUrls.large, path)
      Sharing.shareAsync(uri)
      setShareIsLoading(false)
    } else {
      Sharing.shareAsync(imageFile.uri)
      setShareIsLoading(false)
    }
  }

  if (!imageUrls) {
    return (
      <Box height={300} grey>
        <Loading />
      </Box>
    )
  }

  if (imageUrls.error) {
    return (
      <Box height={100} style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
        <Empty message="Impossible de charger l'image... Assurez-vous d'être connecté à Internet." />
      </Box>
    )
  }
  return (
    <Box>
      <AnimatableBox
        easing="ease-in-out"
        duration={400}
        transition="height"
        position="relative"
        style={{
          height: !open ? 0 : width - 40,
          backgroundColor: theme.colors.lightGrey,
          borderRadius: 10,
          shadowColor: theme.colors.reverse,
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 1,
        }}
      >
        <Link onPress={() => setOpen(s => !s)}>
          <Image
            thumbnailSource={{ uri: imageUrls.small }}
            source={{ uri: imageUrls.large, cache: 'force-cache' }}
            style={{
              width: width - 40,
              height: width - 40,
            }}
            resizeMode="cover"
          />
          <LinkBox
            position="absolute"
            bottom={10}
            left={10}
            width={33}
            height={33}
            onPress={shareImage}
            bg="reverse"
            center
            rounded
            opacity={0.5}
          >
            {shareIsLoading ? (
              <ActivityIndicator size={13} />
            ) : (
              <FeatherIcon name="share-2" size={15} />
            )}
          </LinkBox>
          <Box
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              bottom: 0,
              right: 0,
              padding: 3,
            }}
          >
            <Text fontSize={8}>copyright bible.com</Text>
          </Box>
        </Link>
      </AnimatableBox>
    </Box>
  )
}

export default withTheme(ShowMoreImage)

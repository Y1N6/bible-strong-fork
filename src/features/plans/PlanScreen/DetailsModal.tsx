import React from 'react'
import { Modalize } from 'react-native-modalize'
import FastImage from 'react-native-fast-image'

import Paragraph from '~common/ui/Paragraph'
import Box from '~common/ui/Box'
import { ComputedPlanItem } from '~common/types'
import { useTheme } from 'emotion-theming'
import { Theme } from '~themes'
import { Image } from 'react-native'
import { wp } from '~helpers/utils'

const width = wp(100) - 20

interface Props extends Omit<ComputedPlanItem, 'status' | 'progress'> {
  modalRefDetails: React.RefObject<Modalize<any, any>>
  HeaderComponent?: React.ReactNode
  FooterComponent?: React.ReactNode
}

const DetailsModal = ({
  modalRefDetails,
  image,
  title,
  downloads,
  description,
  author,
  FooterComponent,
  HeaderComponent,
}: Props) => {
  const theme: Theme = useTheme()
  const [height, setHeight] = React.useState<number>()

  React.useEffect(() => {
    if (!image) return
    Image.getSize(
      image,
      (imageWidth, imageHeight) => {
        const height = (width * imageHeight) / imageWidth
        setHeight(height)
      },
      () => {}
    )
  }, [image])

  return (
    <Modalize
      ref={modalRefDetails}
      modalStyle={{ backgroundColor: theme.colors.lightGrey }}
      FooterComponent={FooterComponent}
      HeaderComponent={HeaderComponent}
    >
      <Box paddingHorizontal={20} paddingTop={20} paddingBottom={50}>
        {image && (
          <Box marginBottom={20} rounded>
            <FastImage
              style={{ width: '100%', height: height || 200 }}
              source={{
                uri: image,
              }}
            />
          </Box>
        )}
        <Paragraph fontFamily="title" scale={2}>
          {title}
        </Paragraph>
        {downloads && (
          <Paragraph fontFamily="text" scale={-2} color="grey">
            Téléchargé {downloads} fois
          </Paragraph>
        )}
        <Paragraph marginTop={20} fontFamily="text" scale={-2}>
          {description}
        </Paragraph>
        {author.displayName && (
          <Box marginTop={40} row center>
            {author.photoUrl && (
              <Box borderRadius={10}>
                <FastImage
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: author.photoUrl,
                  }}
                />
              </Box>
            )}
            <Paragraph marginLeft={10} flex={1} fontFamily="text" scale={-3}>
              Créé par {author.displayName}
            </Paragraph>
          </Box>
        )}
      </Box>
    </Modalize>
  )
}

export default DetailsModal

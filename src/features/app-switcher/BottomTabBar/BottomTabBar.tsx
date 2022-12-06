import { useAtomValue } from 'jotai'
import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { FadeInDown, FadeInUp, FadeOutUp } from 'react-native-reanimated'
import Box, { AnimatedBox, TouchableBox } from '~common/ui/Box'
import { FeatherIcon } from '~common/ui/Icon'
import Text from '~common/ui/Text'
import { appSwitcherModeAtom, tabsCountAtom } from '../../../state/tabs'
import { TAB_ICON_SIZE } from '../utils/constants'
import { useTabAnimations } from '../utils/worklets'
import AddTabButton from './Buttons/AddTabButton'
import BibleButton from './Buttons/BibleButton'
import HomeButton from './Buttons/HomeButton'
import MenuButton from './Buttons/MenuButton'
import SearchButton from './Buttons/SearchButton'
import TabButton from './Buttons/TabButton'

type BottomTabBarProps = {
  openMenu: () => void
  openHome: () => void
}

const BottomTabBar = ({ openMenu, openHome }: BottomTabBarProps) => {
  const appSwitcherMode = useAtomValue(appSwitcherModeAtom)
  const tabsCount = useAtomValue(tabsCountAtom)
  const { expandTab } = useTabAnimations()

  return (
    <Box
      pb={getBottomSpace()}
      bg="reverse"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      borderTopWidth={1}
      borderColor="border"
      height={TAB_ICON_SIZE + getBottomSpace()}
    >
      {appSwitcherMode === 'view' ? (
        <AnimatedBox
          row
          alignItems="center"
          justifyContent="space-around"
          px={20}
          exiting={FadeOutUp}
          entering={FadeInDown}
          absoluteFill
          paddingBottom={getBottomSpace()}
          key="view"
        >
          <HomeButton openHome={openHome} />
          <SearchButton />
          <BibleButton />
          <TabButton />
          <MenuButton openMenu={openMenu} />
        </AnimatedBox>
      ) : (
        <AnimatedBox
          row
          alignItems="center"
          justifyContent="space-around"
          px={20}
          exiting={FadeOutUp}
          entering={FadeInDown}
          absoluteFill
          paddingBottom={getBottomSpace()}
          key="list"
        >
          <AddTabButton />
          <Box flex center>
            <Text>{tabsCount} onglets</Text>
          </Box>
          <TouchableBox center size={TAB_ICON_SIZE} onPress={() => expandTab()}>
            <Text bold>OK</Text>
          </TouchableBox>
        </AnimatedBox>
      )}
    </Box>
  )
}

export default BottomTabBar

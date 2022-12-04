import { useAtom } from 'jotai'
import React, { memo, useCallback, useRef } from 'react'
import { LogBox, useWindowDimensions } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'

import { DrawerLayout, ScrollView } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Box, { AnimatedBox } from '~common/ui/Box'
import BottomTabBar from '~features/app-switcher/BottomTabBar/BottomTabBar'
import HomeScreen from '~features/home/HomeScreen'
import MoreScreen from '~features/settings/MoreScreen'
import { wp } from '~helpers/utils'
import { tabsAtomsAtom } from '../../../../state/tabs'
import AddTab from '../../AddTab'
import { AppSwitcherProvider } from '../../AppSwitcherProvider'
import VTabPreview from './TabPreview'
import TabScreen from '../../TabScreen/TabScreen'
import useAppSwitcher from './useAppSwitcher'
import useTabConstants from './useTabConstants'
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper'
import { TAB_ICON_SIZE } from '~features/app-switcher/utils/constants'

interface AppSwitcherProps {
  openMenu: () => void
  openHome: () => void
}

export const TAB_PREVIEW_SCALE = 0.6

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

const AppSwitcherScreen = memo(
  ({
    navigation,
    openMenu,
    openHome,
  }: NavigationStackScreenProps<{}> & AppSwitcherProps) => {
    const [tabsAtoms] = useAtom(tabsAtomsAtom)

    const { TABS_PER_ROW, GAP, SCREEN_MARGIN } = useTabConstants()
    const {
      scrollViewRef,
      tapGestureRefs,
      onDeleteItem,
      scrollHandler,
      PADDING_HORIZONTAL,
      scrollViewBoxStyle,
      activeAtom,
    } = useAppSwitcher()

    return (
      <Box flex={1} bg="lightGrey">
        <AnimatedScrollView
          // @ts-ignore
          ref={scrollViewRef}
          simultaneousHandlers={tapGestureRefs}
          showsVerticalScrollIndicator={false}
          // onScroll={scrollHandler}
          contentContainerStyle={{
            paddingTop: getStatusBarHeight() + SCREEN_MARGIN,
            paddingLeft: PADDING_HORIZONTAL,
            paddingRight: PADDING_HORIZONTAL,
            paddingBottom: getBottomSpace() + TAB_ICON_SIZE,
          }}
        >
          <AnimatedBox
            overflow="visible"
            row
            style={[
              scrollViewBoxStyle,
              {
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              },
            ]}
          >
            {tabsAtoms.map((tabAtom, i) => (
              <VTabPreview
                key={`${tabAtom}`}
                index={i}
                tabAtom={tabAtom}
                marginRight={i % TABS_PER_ROW ? 0 : GAP}
                tapGestureRef={tapGestureRefs[i]}
                simultaneousHandlers={scrollViewRef}
                onDelete={onDeleteItem}
              />
            ))}
          </AnimatedBox>
        </AnimatedScrollView>
        {activeAtom && (
          <TabScreen tabAtom={activeAtom} navigation={navigation} />
        )}
        <BottomTabBar openMenu={openMenu} openHome={openHome} />
      </Box>
    )
  }
)

export default (props: any) => {
  const moreDrawerRef = useRef<DrawerLayout>(null)
  const homeDrawerRef = useRef<DrawerLayout>(null)

  const openMenu = useCallback(() => {
    moreDrawerRef.current?.openDrawer()
  }, [])

  const closeMenu = useCallback(() => {
    moreDrawerRef.current?.closeDrawer()
  }, [])

  const openHome = useCallback(() => {
    homeDrawerRef.current?.openDrawer()
  }, [])

  const closeHome = useCallback(() => {
    homeDrawerRef.current?.closeDrawer()
  }, [])

  const renderHomeScreen = useCallback(
    () => <HomeScreen closeHome={closeHome} />,
    [closeHome]
  )

  const renderMoreScreen = useCallback(
    () => <MoreScreen closeMenu={closeMenu} />,
    [closeMenu]
  )

  return (
    <DrawerLayout
      ref={homeDrawerRef}
      drawerWidth={wp(100, 450)}
      drawerPosition="left"
      drawerType="slide"
      overlayColor="transparent"
      renderNavigationView={renderHomeScreen}
      drawerLockMode="locked-closed"
    >
      <DrawerLayout
        ref={moreDrawerRef}
        drawerWidth={wp(100, 450)}
        drawerPosition="right"
        drawerType="slide"
        overlayColor="transparent"
        renderNavigationView={renderMoreScreen}
        drawerLockMode="locked-closed"
      >
        <AppSwitcherProvider>
          <AppSwitcherScreen
            openHome={openHome}
            openMenu={openMenu}
            {...props}
          />
        </AppSwitcherProvider>
      </DrawerLayout>
    </DrawerLayout>
  )
}

import React from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { Asset } from 'expo-asset'
import * as FileSystem from 'expo-file-system'
import { ProgressBar } from 'react-native-paper'
import styled from '@emotion/native'
import { withTheme } from 'emotion-theming'
import * as Icon from '@expo/vector-icons'

import SnackBar from '~common/SnackBar'
import Box from '~common/ui/Box'
import Button from '~common/ui/Button'
import Link from '~common/Link'
import { getIfVersionNeedsDownload } from '~helpers/bibleVersions'

const BIBLE_FILESIZE = 5000000

const Container = styled.View({
  padding: 15,
  paddingTop: 10,
  paddingBottom: 10
})

const TextVersion = styled.Text(({ isSelected, theme }) => ({
  color: isSelected ? theme.colors.primary : theme.colors.default,
  fontSize: 12
}))

const TextName = styled.Text(({ isSelected, theme }) => ({
  color: isSelected ? theme.colors.primary : theme.colors.default,
  fontSize: 16,
  backgroundColor: 'transparent'
}))

const DeleteIcon = styled(Icon.Feather)(({ theme }) => ({
  color: theme.colors.quart
}))

class VersionSelectorItem extends React.Component {
  state = {
    versionNeedsDownload: undefined,
    fileProgress: 0,
    isLoading: false
  }

  async componentDidMount() {
    const { version } = this.props
    const versionNeedsDownload = await getIfVersionNeedsDownload(version.id)
    this.setState({ versionNeedsDownload })
  }

  requireBibleFileUri = id => {
    switch (id) {
      case 'DBY': {
        return Asset.fromModule(require('~assets/bible_versions/bible-dby.txt')).uri
      }
      case 'OST': {
        return Asset.fromModule(require('~assets/bible_versions/bible-ost.txt')).uri
      }
      case 'BDS': {
        return Asset.fromModule(require('~assets/bible_versions/bible-bds.txt')).uri
      }
      case 'FMAR': {
        return Asset.fromModule(require('~assets/bible_versions/bible-fmar.txt')).uri
      }
      case 'FRC97': {
        return Asset.fromModule(require('~assets/bible_versions/bible-frc97.txt')).uri
      }
      case 'NBS': {
        return Asset.fromModule(require('~assets/bible_versions/bible-nbs.txt')).uri
      }
      case 'NEG79': {
        return Asset.fromModule(require('~assets/bible_versions/bible-neg79.txt')).uri
      }
      case 'NVS78P': {
        return Asset.fromModule(require('~assets/bible_versions/bible-nvs78p.txt')).uri
      }
      case 'S21': {
        return Asset.fromModule(require('~assets/bible_versions/bible-s21.txt')).uri
      }
      case 'KJF': {
        return Asset.fromModule(require('~assets/bible_versions/bible-kjf.txt')).uri
      }
    }
  }

  calculateProgress = ({ totalBytesWritten, totalBytesExpectedToWrite }) => {
    const fileProgress = Math.floor((totalBytesWritten / BIBLE_FILESIZE) * 100) / 100
    this.setState({ fileProgress })
  }

  startDownload = async () => {
    const { version } = this.props

    this.setState({ isLoading: true })

    const path = `${FileSystem.documentDirectory}bible-${version.id}.json`
    const uri = this.requireBibleFileUri(version.id)

    console.log(`Downloading ${uri} to ${path}`)
    try {
      await FileSystem.createDownloadResumable(
        uri,
        path,
        null,
        this.calculateProgress
      ).downloadAsync()

      console.log('Download finished')

      this.setState({ versionNeedsDownload: false, isLoading: false })
    } catch (e) {
      SnackBar.show(
        "Impossible de commencer le téléchargement. Assurez-vous d'être connecté à internet.",
        'danger'
      )
      this.setState({ isLoading: false })
    }
  }

  confirmDelete = () => {
    Alert.alert('Attention', 'Êtes-vous vraiment sur de supprimer cette version ?', [
      { text: 'Non', onPress: () => null, style: 'cancel' },
      {
        text: 'Oui',
        onPress: async () => {
          const { version } = this.props
          const path = `${FileSystem.documentDirectory}bible-${version.id}.json`
          const file = await FileSystem.getInfoAsync(path)
          FileSystem.deleteAsync(file.uri)
          this.setState({ versionNeedsDownload: true })
        },
        style: 'destructive'
      }
    ])
  }

  render() {
    const { version, theme } = this.props
    const { versionNeedsDownload, isLoading, fileProgress } = this.state

    if (typeof versionNeedsDownload === 'undefined') {
      return null
    }

    if (versionNeedsDownload) {
      return (
        <Container>
          <Box flex row>
            <Box disabled flex>
              <TextVersion>{version.id}</TextVersion>
              <TextName>{version.name}</TextName>
            </Box>
            {!isLoading && (
              <Button reverse small title="Télécharger" onPress={this.startDownload} />
            )}
            {isLoading && (
              <Box width={100} justifyContent="center">
                <ProgressBar progress={fileProgress} color={theme.colors.default} />
              </Box>
            )}
          </Box>
        </Container>
      )
    }

    return (
      <Container>
        <Box flex row center>
          <Box flex>
            <TextVersion>{version.id}</TextVersion>
            <TextName>{version.name}</TextName>
          </Box>
          <TouchableOpacity onPress={this.confirmDelete} style={{ padding: 10 }}>
            <DeleteIcon name="trash-2" size={20} />
          </TouchableOpacity>
        </Box>
      </Container>
    )
  }
}

export default withTheme(VersionSelectorItem)

import React, { useEffect, useState } from 'react'
import Box from '~common/ui/Box'
import Text from '~common/ui/Text'
import { useTranslation } from 'react-i18next'
import useLanguage from '~helpers/useLanguage'

const CountdownTimer = () => {
  const { t } = useTranslation()
  const isFR = useLanguage()
  const calculateTimeLeft = () => {
    const difference = +new Date('2020-08-01') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        [isFR ? 'jours' : 'days']: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<{
    [x: string]: number
    jours?: string
    h?: string
    min?: string
    s?: string
  }>(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  return (
    <Text color="quart">
      {t('Disponible gratuitement dans')}{' '}
      {Object.keys(timeLeft).map((interval: string) => {
        if (!timeLeft[interval]) {
          return null
        }

        return (
          <>
            {timeLeft[interval]} {t(interval)}{' '}
          </>
        )
      })}
    </Text>
  )
}

export default CountdownTimer

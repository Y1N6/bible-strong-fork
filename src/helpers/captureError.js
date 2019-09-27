import * as Sentry from 'sentry-expo'
import SnackBar from '~common/SnackBar'

const captureError = (e, message) => {
  SnackBar.show(message, 'danger')
  console.log(e)
  Sentry.captureException(e)
}

export default captureError

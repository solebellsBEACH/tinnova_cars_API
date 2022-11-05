import { test } from '@japa/runner'
import { formatRouteParams } from '../../../helpers'

test.group('Helpers format route params', () => {
  const url = 'vehicle?id=test&ano=20&nome=lucas'
  console.log(formatRouteParams(url))
})

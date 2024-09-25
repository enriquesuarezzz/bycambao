import { cookies } from 'next/headers'
import CookiesModal from '../cookies_modal/cookies_modal'
import { COOKIE_CONSENT } from '@/utils/cookies'

export default function CookiesPopup() {
  const cookieStore = cookies()

  const consent = cookieStore.get(COOKIE_CONSENT)?.value
  return <CookiesModal checked={consent === 'true'} />
}

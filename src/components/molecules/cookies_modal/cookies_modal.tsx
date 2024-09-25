'use client'
import { useState } from 'react'
import { MontserratText } from '@/components/atoms/monserrat_text'
import { CookieClient, COOKIE_CONSENT } from '@/utils/cookies'
import { Montserrat } from 'next/font/google'

export const monserrat_text = Montserrat({ subsets: ['latin'] })

export interface CookiesModalProps {
  checked: boolean
}

export default function CookiesModal({ checked }: CookiesModalProps) {
  const [showModal, setShowModal] = useState(!checked)

  const handleAcceptCookie = () => {
    CookieClient.setCookie(COOKIE_CONSENT, 'true')
    setShowModal(false)
  }

  const handleCancelCookie = () => {
    CookieClient.deleteCookie(COOKIE_CONSENT)
    setShowModal(false)
  }
  return (
    showModal && (
      <div
        className={`fixed bottom-0 left-2 z-40 flex h-fit w-fit flex-col justify-between gap-6 bg-orange/60 px-6 py-4 text-white backdrop-blur-sm sm:left-4`}
      >
        <div className="flex h-fit w-full max-w-[300px] flex-col gap-10">
          {/* Title + description */}
          <div className="flex h-fit w-full flex-col gap-5 text-center">
            {/* Title */}
            <MontserratText
              text={'Cookies'}
              fontSize="28px"
              style="semibold"
              className="text-center italic"
            />
            {/* Description */}
            <div className="flex h-fit w-full flex-col gap-4">
              <MontserratText
                text={
                  'En nuestro sitio web utilizamos cookies propias y de terceros para finalidades analíticas mediante el análisis del tráfico web.'
                }
                fontSize="16px"
                className=""
              />
              <MontserratText
                text={
                  'Para más información puede consultar nuestra política de cookies <a class="underline hover:text-orange" href="/politica-de-cookies"> Aquí.</a>'
                }
                fontSize="16px"
                className=""
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex h-fit w-full flex-row justify-center gap-5 pb-2">
            {/* Decline */}
            <button
              className="onHover flex h-fit flex-col items-center justify-center border px-9 py-3 hover:bg-orange"
              onClick={() => handleCancelCookie()}
            >
              <MontserratText text={'Rechazar'} fontSize="14px" className="" />
            </button>
            {/* Accept */}
            <button
              className="onHover flex h-fit flex-col items-center justify-center border bg-orange/60 px-9 py-3 hover:bg-orange"
              onClick={() => handleAcceptCookie()}
            >
              <MontserratText text={'Aceptar'} fontSize="14px" className="" />
            </button>
          </div>
        </div>
      </div>
    )
  )
}

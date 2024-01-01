import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { useModal, ModalType } from '@/hooks/use-modal'
import DialogModal from '../modals/dialog'
import DialogCreate from '../modals/create-resultado'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { isOpen, type } = useModal()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const modals: Record<ModalType, JSX.Element> = {
    dialog: <DialogModal />,
    'create-resultado': <DialogCreate />
  }

  const ModalComponent: JSX.Element = modals[type!]

  return (
    <>
      <AnimatePresence>
        {isOpen && ModalComponent && (ModalComponent as JSX.Element)}
      </AnimatePresence>
    </>
  )
}

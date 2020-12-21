import styles from 'common/components/Divider/Divider.module.scss'
import React from 'react'
import {BsCode} from 'react-icons/bs'

interface Props {
  color: 'primary' | 'secondary' | 'dark' | 'light'
}

/**
 * Common divider used across components.
 * @param root0 Divider props
 * @param root0.color Color of the divider
 * @return React component
 */
export const Divider: React.FC<Props> = ({color}: Props) => (
  <div className="d-flex w-100 align-items-center justify-content-center">
    <div className={`bg-${color} mb-2 mr-1 ${styles.divider}`} />
    <BsCode className={`text-${color} mb-2`} size={40} />
    <div className={`bg-${color} mb-2 ml-1 ${styles.divider}`} />
  </div>
)

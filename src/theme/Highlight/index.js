import clsx from 'clsx'
import React from 'react'
import styles from './highlight.module.css'

import IconInfo from '@site/static/img/ui/icons/status/info.svg'
import IconTip from '@site/static/img/ui/icons/status/tip.svg'
import IconDanger from '@site/static/img/ui/icons/status/danger.svg'
import IconCaution from '@site/static/img/ui/icons/status/caution.svg'

const Highlight = ({ children, type = 'neutral' }) => {
  const getIcon = (type) => {
    const style = 'w-8 h-8 fill-current text-white'
    if (type === 'neutral')
      return <IconInfo className={`${style} text-xp-grey-700 `} />
    if (type === 'tip') return <IconTip className={style} />
    if (type === 'caution') return <IconCaution className={style} />
    if (type === 'danger') return <IconDanger className={style} />
  }

  return (
    <div
      className={`flex mb-8 overflow-hidden rounded-lg shadow ${styles.highlight}`}
    >
      {/* Icon */}
      <div
        className={clsx('px-3 md:px-6 py-4 flex items-center', {
          'bg-status-neutral': type === 'neutral',
          'bg-status-tip': type === 'tip',
          'bg-status-danger': type === 'danger',
          'bg-status-caution': type === 'caution',
        })}
      >
        {getIcon(type)}
      </div>

      {/* Content */}
      <div className="px-6 py-4">{children}</div>
    </div>
  )
}

export default Highlight

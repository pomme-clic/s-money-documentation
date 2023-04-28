/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import CustomToggleImgDark from '@site/static/img/ui/icons/toggle-dark.svg'
import CustomToggleImgLight from '@site/static/img/ui/icons/toggle-light.svg'
import clsx from 'clsx'
import React, { memo, useRef, useState } from 'react'
import './styles.css'
import styles from './styles.module.css'

const Dark = ({ icon, style }) => (
  <span className={clsx(styles.toggle, styles.dark)} style={style}>
    {icon}
  </span>
)

const Light = ({ icon, style }) => (
  <span className={clsx(styles.toggle, styles.light)} style={style}>
    {icon}
  </span>
) // Based on react-toggle (https://github.com/aaronshaf/react-toggle/).

const Toggle = memo(
  ({ className, icons, checked: defaultChecked, disabled, onChange }) => {
    const [checked, setChecked] = useState(defaultChecked)
    const [focused, setFocused] = useState(false)
    const inputRef = useRef(null)
    return (
      <div
        className={clsx('react-toggle', className, {
          'react-toggle--checked': checked,
          'react-toggle--focus': focused,
          'react-toggle--disabled': disabled,
        })}
      >
        <div
          className="react-toggle-track"
          role="button"
          tabIndex={-1}
          onClick={() => inputRef.current?.click()}
        >
          <div className="react-toggle-track-check">
            <CustomToggleImgDark
              className={`${styles.customToggleImg} w-full relative top-[-7px] left-[2px]`}
            />
          </div>
          <div className="react-toggle-track-x !w-[18px]">
            <CustomToggleImgLight
              className={`${styles.customToggleImg} w-full relative top-[-7px] left-[2px]`}
            />
          </div>
          <div className="react-toggle-thumb" />
        </div>

        <input
          ref={inputRef}
          checked={checked}
          type="checkbox"
          className="react-toggle-screenreader-only"
          aria-label="Switch between dark and light mode"
          onChange={onChange}
          onClick={() => setChecked(!checked)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    )
  },
)
export default function (props) {
  const { isClient } = useDocusaurusContext()
  return (
    <Toggle
      disabled={!isClient}
      icons={{
        checked: <Dark />,
        unchecked: <Light />,
      }}
      {...props}
    />
  )
}

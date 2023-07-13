/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import { useThemeConfig } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import isInternalUrl from '@docusaurus/isInternalUrl'

import XpollensLogo from '@site/static/img/ui/logo_xpollens_tagline.svg'

import SocialIconTwitter from '@site/static/img/ui/icons/social/twitter.svg'
import SocialIconLinkedin from '@site/static/img/ui/icons/social/linkedin.svg'
import SocialIconDefault from '@site/static/img/ui/icons/social/default.svg'

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to)
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  })
  return (
    <Link
      className="text-sm footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {href && !isInternalUrl(href) ? label : label}
    </Link>
  )
}

function Footer() {
  const { footer } = useThemeConfig()
  const { footerCustom } = useThemeConfig()
  const { tagline, socialIcons } = footerCustom || {}
  const { copyright, links = [], logo = {} } = footer || {}
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  }

  if (!footer) {
    return null
  }

  const getSocialIcon = (title) => {
    if (title === 'twitter') return <SocialIconTwitter alt={title} />
    if (title === 'linkedin') return <SocialIconLinkedin alt={title} />
    return <SocialIconDefault alt={title} />
  }

  return (
    <footer
      className={clsx('footer py-10 px-5 lg:py-20 lg:px-20', {
        'footer--dark': footer.style === 'dark',
      })}
    >
      <div className="container">
        {links && links.length > 0 && (
          <div className="flex-col row footer__links lg:flex-row">
            {/* Brand */}
            <div className="w-full pr-10 md:w-1/2 lg:w-1/3">
              <XpollensLogo className={`w-[165px] h-auto`} alt="xpollens" />

              <p
                className="mt-4 opacity-80"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: tagline,
                }}
              ></p>

              <div className="flex mt-5 space-x-4">
                {socialIcons.map(({ title, href }, key) => {
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getSocialIcon(title)}
                    </a>
                  )
                })}
              </div>

              <p
                className="mt-8 leading-tight opacity-75"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              ></p>
            </div>

            {/* Links */}
            <div className="flex flex-col mt-10 lg:flex-row lg:flex-grow lg:mt-0">
              {links.map((linkItem, i) => (
                <div key={i} className="!pl-0 col footer__col lg:!pl-2">
                  {linkItem.title != null ? (
                    <div className="font-bold footer__title">
                      {linkItem.title}
                    </div>
                  ) : null}
                  {linkItem.items != null &&
                  Array.isArray(linkItem.items) &&
                  linkItem.items.length > 0 ? (
                    <ul className="space-y-3 footer__items">
                      {linkItem.items.map((item, key) =>
                        item.html ? (
                          <li
                            key={key}
                            className="footer__item" // Developer provided the HTML, so assume it's safe.
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: item.html,
                            }}
                          />
                        ) : (
                          <li key={key} className="footer__item">
                            <FooterLink {...item} />
                          </li>
                        ),
                      )}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && (logo.src || logo.srcDark) && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <Link href={logo.href} className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} sources={sources} />
                  </Link>
                ) : (
                  <FooterLogo alt={logo.alt} sources={sources} />
                )}
              </div>
            )}
            {copyright ? (
              <div
                className="footer__copyright" // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
        )} */}
      </div>
    </footer>
  )
}

export default Footer

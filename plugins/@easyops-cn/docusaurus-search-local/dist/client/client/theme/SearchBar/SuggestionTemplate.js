// import { useRef } from 'react'
import { highlight } from '../../utils/highlight'
import { highlightStemmed } from '../../utils/highlightStemmed'
import { getStemmedPositions } from '../../utils/getStemmedPositions'
import {
  iconTitle,
  iconTitleApi,
  iconHeading,
  iconContent,
  iconAction,
  iconTreeInter,
  iconTreeLast,
} from './icons'
import styles from './SearchBar.module.css'
export function SuggestionTemplate({
  document,
  type,
  page,
  metadata,
  tokens,
  isInterOfTree,
  isLastOfTree,
}) {
  // const apiSubTree = useRef()
  const isTitle = type === 0
  const isDoc = document.u.startsWith('/docs')
  const isApi = document.u.startsWith('/api')
  const iconTitleType = isDoc ? iconTitle : iconTitleApi
  const isHeading = type === 1
  const tree = []
  if (isInterOfTree) {
    tree.push(iconTreeInter)
  } else if (isLastOfTree) {
    tree.push(iconTreeLast)
  }
  const treeWrapper = tree.map(
    (item) =>
      `<span  class="${styles.hitTree} ${
        isApi ? 'isApiSubtree' : ''
      }">${item}</span>`,
  )
  const icon = `<span class="${styles.hitIcon}">${
    isTitle ? iconTitleType : isHeading ? iconHeading : iconContent
  }</span>`
  const wrapped = [
    `<span class="${styles.hitTitle}">${highlightStemmed(
      document.t,
      getStemmedPositions(metadata, 't'),
      tokens,
    )}</span>`,
  ]
  if (!isTitle) {
    wrapped.push(
      `<span class="${styles.hitPath}">${highlight(
        page.t ||
          // istanbul ignore next
          (document.u.startsWith('/docs/api-reference/')
            ? 'API Reference'
            : ''),
        tokens,
      )}</span>`,
    )
  }
  const action = `<span class="${styles.hitAction}">${iconAction}</span>`

  return [
    ...treeWrapper,
    icon,
    `<span class="${styles.hitWrapper}">`,
    ...wrapped,
    '</span>',
    action,
  ].join('')

  // if ((isApi && isInterOfTree) || (isApi && isLastOfTree)) {
  //   return [].join('')
  // } else {
  //   return [
  //     ...treeWrapper,
  //     icon,
  //     `<span class="${styles.hitWrapper}">`,
  //     ...wrapped,
  //     '</span>',
  //     action,
  //   ].join('')
  // }
}

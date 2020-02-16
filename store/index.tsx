
import { useStaticRendering } from 'mobx-react-lite'
import { createContext, useContext } from 'react'
import { FeedStore } from './feed-store';

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

export const storesContext = createContext({
  feedStore: new FeedStore()
})

export const useStores = () => useContext(storesContext)
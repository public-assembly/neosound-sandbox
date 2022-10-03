import { createContext, useContext, useState } from 'react'

const ViewContext = createContext({
  view: 'list',
  setView: (view: string) => {},
})

interface ViewProviderProps {
  children: JSX.Element | JSX.Element[]
}

export function ViewProvider({ children }: ViewProviderProps) {
  const [view, setView] = useState('list')

  return <ViewContext.Provider value={{ view, setView }}>{children}</ViewContext.Provider>
}

export function useViewsToggle() {
  const context = useContext(ViewContext)

  if (!context) {
    throw new Error('useViewsToggle must be used within a ViewProvider')
  }

  return { view: context.view, setView: context.setView }
}

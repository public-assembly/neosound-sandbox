import { ViewsToggle } from 'components/ViewsToggle'
import { GridView } from 'components/Views/Grid'
import { ListView } from 'components/Views/List/ListView'
import { useViewsToggle, ViewProvider } from 'context/viewsContext'
import { MintContextProvider } from 'context/mintingModalsContext'

const Listen = () => {
  const { view } = useViewsToggle()

  return (
    <>
      <ViewsToggle />
      {view == 'grid' ? <GridView /> : <ListView />}
    </>
  )
}

export default Listen

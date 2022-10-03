import { ViewsToggle } from 'components/ViewsToggle'
import { GridView } from 'components/Views/Grid/GridView'
import { ListView } from 'components/Views/List/ListView'
import { useViewsToggle } from 'context/viewsContext'

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

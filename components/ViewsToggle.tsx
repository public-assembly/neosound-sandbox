import Image from 'next/image'
import { useState } from 'react'

interface ViewsToggleProps {
  setView: (view: string) => void
  view: string
}

export const ViewsToggle = ({ setView, view }: ViewsToggleProps) => {
  const [hoverGrid, setHoverGrid] = useState(false)
  const [hoverList, setHoverList] = useState(false)
  return (
    <div className="pa_views-toggle fixed top-[100px] right-6 sm:right-12 z-30 flex justify-end h-[50px] box-border gap-2 w-full ">
      <button
        onClick={() => setView('grid')}
        className="pa_views-toggle__grid"
        onMouseEnter={() => setHoverGrid(true)}
        onMouseLeave={() => setHoverGrid(false)}>
        <Image
          src={`${
            view == 'grid'
              ? '/neosound-icons/navIcons/grid-current.svg'
              : hoverGrid == true
              ? '/neosound-icons/navIcons/grid-hover.svg'
              : '/neosound-icons/navIcons/grid-default.svg'
          }`}
          alt="Grid View"
          width={32}
          height={32}
          layout="fixed"
        />
      </button>
      <button
        onClick={() => setView('list')}
        className="pa_views-toggle__list"
        onMouseEnter={() => setHoverList(true)}
        onMouseLeave={() => setHoverList(false)}>
        <Image
          src={`${
            view == 'list'
              ? '/neosound-icons/navIcons/list-pressed.svg'
              : hoverList == true
              ? '/neosound-icons/navIcons/list-hover.svg'
              : '/neosound-icons/navIcons/list-default.svg'
          }`}
          alt="List View"
          width={32}
          height={32}
        />
      </button>
    </div>
  )
}

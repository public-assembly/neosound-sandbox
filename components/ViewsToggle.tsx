import Image from 'next/image'

interface ViewsToggleProps {
  setView: (view: string) => void
  view: string
}

export const ViewsToggle = ({ setView, view }: ViewsToggleProps) => {
  return (
    <div className="pa_views-toggle fixed top-[100px] right-6 sm:right-12 z-50 flex justify-end h-[50px] box-border gap-2 w-full ">
      <button onClick={() => setView('grid')} className="pa_views-toggle__grid">
        <Image
          src={`${
            view == 'grid'
              ? '/neosound-icons/navIcons/grid-current.svg'
              : '/neosound-icons/navIcons/grid-default.svg'
          }`}
          alt="Grid View"
          width={32}
          height={32}
          layout="fixed"
        />
      </button>
      <button onClick={() => setView('list')} className="pa_views-toggle__list">
        <Image
          src={`${
            view == 'list'
              ? '/neosound-icons/navIcons/list-pressed.svg'
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

import Image from 'next/image'

interface ViewsToggleProps {
  setView: (view: string) => void
}

export const ViewsToggle = ({ setView }: ViewsToggleProps) => {
  return (
    <div className="flex items-center justify-end w-full py-4 gap-4 ">
      <button onClick={() => setView('grid')}>
        <Image
          src={'/icons/grid.svg'}
          alt="Grid View"
          width={48}
          height={48}
          layout="fixed"
        />
      </button>
      <button onClick={() => setView('list')}>
        <Image src={'/icons/list.svg'} alt="List View" width={48} height={48} />
      </button>
    </div>
  )
}

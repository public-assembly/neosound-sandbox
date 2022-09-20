export function PlayerWrapper({ children }: { children?: JSX.Element | JSX.Element[] }) {
  //hardcoded styles for now
  // to be consumed by theme provider
  return (
    <div className="flex flex-col items-center z-40 fixed bottom-0 lg:bottom-5 left-0 right-0 justify-between ">
      <div className="w-[100%] lg:w-[50%]">
        <div className="bg-[#ffffff] relative flex flex-col justify-center gap-4 text-sm text-stone-800 border-t border-t-stone-300 border-l-0 border-b-0 border-r-0 md:border md:border-stone-300 p-4 ">
          {children}
        </div>
      </div>
    </div>
  )
}

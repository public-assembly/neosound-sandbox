import { useDropsContextProvider } from "@public-assembly/zora-drops-utils";
import { addIPFSGateway } from "@public-assembly/zora-drops-utils";

export function ConsumerImage({src}: {src: string}) {
  return (
    <div style={{width: 300, height: 300}} className="relative">
      <img src={addIPFSGateway(src)} className="object-cover inset-0 absolute" />
    </div>
  )
}

export function TestArrayProviderConsumer() {
  const { data, isLoading } = useDropsContextProvider()
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">Using Array Provider:</h1>
      <p>Image is separate component with no props passed in.</p>
      <br />
      {!isLoading
        ? <div className="flex flex-row gap-6">
          {/**
           * @ts-ignore
          */}
          {data && data.map((edition: any) =>
            <ConsumerImage key={edition?.name} src={edition?.editionMetadata?.imageURI} />
          )}
          </div>
        : <p>...loading</p>
      }
    </div>
  )
}

import { RawDisplayer } from "./../RawDisplayer";
import { useDropContextProvider } from "@public-assembly/zora-drops-utils";
import { ProviderImage } from "./ProviderImage";

export function TestProviderConsumer() {
  const { data, error, isLoading } = useDropContextProvider()
  return (
    <div className="flex flex-col">
      <h1 className="text-xl">Using Provider:</h1>
      <p>Image is separate component with no props passed in.</p>
      <br />
      {!isLoading
        ? <div className="flex flex-col gap-6">
            <ProviderImage />  
            <RawDisplayer data={{ data, error }} />
          </div>
        : <p>...loading</p>
      }
    </div>
  )
}

import Image from 'next/image'
const About = () => {
  return (
    <div className="flex flex-col justify-between items-start text-stone-200 gap-4 md:max-w-4xl">
      <div className="w-full sm:w-72">
        <Image
          src="/logos/logo.svg"
          alt="logo"
          width={900}
          height={100}
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <h1 className="text-3xl font-bold mt-12">Introduction</h1>
      <p className="font-light text-stone-300">
        In contrast to the physical world, only one degree of separation lies between
        everyone on the internet. Today, we are exploring tools such as Neosound that help
        our technology and expand our circles of trust while allowing for new models of
        coordination + creation to take stage...but what exactly is Neosound?
      </p>
      <p className="font-light text-stone-300">
        Neosound is a modular music player prototype designed to cater to hyper-local
        communities, such as netlabels, with specific needs, tastes, and overall: aims to
        promote identity in the digital realm. Not everyone wants to be the next big thing
        in blockchain, or the next big platform so Neosound was created for that reason.{' '}
      </p>
      <p className="font-light text-stone-300">
        Specifically, this is a direct synthesis of microplatforms like unun, present
        material, and door. It&apos;s an open-source build for anyone to use as a
        curational tool to elevate music to their most open level. Neosound is not so much
        focused on aggregation but instead on creating small, intimate, and collaborative
        listening spaces for digital communities to grow.
      </p>
    </div>
  )
}

export default About

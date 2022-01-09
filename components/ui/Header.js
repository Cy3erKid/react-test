/* This example requires Tailwind CSS v2.0+ */
export default function Header({title}) {
  return (
    <div className="mx-auto block text-center mb-6">
      <h1 className="text-5xl text-gray-900 font-bold leading-normal">{ title }</h1>
    </div>
  )
}

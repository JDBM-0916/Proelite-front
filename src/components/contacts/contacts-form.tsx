


export default function ContactsForm() {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="mx-0 w-[556px] h-[524px] flex flex-col space-y-6">
        <h2 className="text-center text-[40px] leading-[50px] font-semibold">Permítenos <span className="text-custom-yellow">atenderte.</span></h2>
        <p className="text-center">
          Estamos atentos para resolver cualquier duda que usted tenga.
        </p>

        <div className="flex flex-col space-y-2">
          <label htmlFor="nombre" className="font-normal text-[12px] leading-3 text-[#728197]">Nombre</label>
          <input type="text" id="nombre" className="border border-gray-300 rounded p-2" />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-normal text-[12px] leading-3 text-[#728197]">Email</label>
          <input type="email" id="email" className="border border-gray-300 rounded p-2" />
        </div>

        <div className="flex flex-col space-y-2 ">
          <label htmlFor="mensaje" className="font-normal text-[12px] leading-3 text-[#728197]">Mensaje</label>
          <textarea id="mensaje" className="border border-gray-300 rounded p-2 h-32 mb-6"  />
        </div>

        <input type="submit" id="enviar" value="Enviar" className="mt-4 bg-custom-yellow py-2 rounded cursor-pointer w-[40%] mx-auto " />
      </div>
    </div>

  )
}
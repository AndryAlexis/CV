import FotoPerfil from '../../assets/imgs/foto-perfil.jpg'

const CurriculumVitae = () => {
    return <>
        <div className="w-full grid place-items-center py-4">
            <div className="w-[clamp(150px,95%,1536px)] flex gap-4 flex-wrap">
                <aside className="[border:1px_solid_black] h-96 min-w-[300px] w-[150px_100%] flex-1 p-4 rounded-lg">
                    <article className="flex flex-row flex-wrap gap-4">
                        <div className='flex justify-center items-center [flex:1] min-w-[150px]'>
                            <img className="block rounded-lg" src={FotoPerfil} alt="Andry Alexis Reyes Cruz" width={150} height={150} />
                        </div>
                        <div className='flex flex-col justify-between gap-2 [flex:999]'>
                            <div className='grid gap-2'>
                                <h1 className="text-4xl">
                                    Andry Alexis Reyes Cruz
                                </h1>
                                <h2 className='text-xl'>
                                    Desarrollador Web Front-End
                                </h2>
                            </div>
                            <ul>
                                <li>
                                    26 años
                                </li>
                                <li>
                                    2 años de experiencia
                                </li>
                            </ul>
                        </div>

                    </article>
                </aside>
                <main className="[border:1px_solid_green] h-96 [flex:1_300px]">

                </main>
            </div>
        </div>
    </>
}

export default CurriculumVitae
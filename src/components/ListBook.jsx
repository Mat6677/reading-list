

export const ListBook = ({title,genre,synopsis,cover}) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between max-[508px]:justify-center">
        <section className="flex flex-col justify-between min-w-[200px] max-w-[200px] max-[508px]:min-w-[100svw] max-[508px]:items-center max-[508px]:gap-5">
            <h3 className="text-xl border-b-2 border-secondary w-fit max-[508px]:text-center">{title}</h3>
            <p>{genre}</p>
            <p className="max-[508px]:text-center">{synopsis}</p>
        </section>
        <figure className="h-[250px] min-w-[150px] max-w-[250px]">
            <img className="h-full w-full" src={cover} alt={title} />
        </figure>
    </div>
  )
}

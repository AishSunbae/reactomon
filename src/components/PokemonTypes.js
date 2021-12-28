const PokemonTypes = ({ types }) => {
    return (
        <>
            {types['results'].map((type, id) =>
                ({type}))}
        </>
    )
}

export default PokemonTypes

import LatestGame from "./LatestGame";

const Catalog = ({games}) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            
            {games.length > 0 
                ? games.map(x => <LatestGame key={x._id} game={x} />)
                : <h3 class="no-articles">No articles yet</h3>
            }

        </section>
    )
}

export default Catalog;
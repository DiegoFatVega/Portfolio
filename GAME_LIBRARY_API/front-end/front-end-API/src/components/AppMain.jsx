import GameCard from "./gameCard"
import data from "../data"


export default function AppMain() {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            {data.map(data => <GameCard title={data.title} platform={data.platforms} key={data.id} />)}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
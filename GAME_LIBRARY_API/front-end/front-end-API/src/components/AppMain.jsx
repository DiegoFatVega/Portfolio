import GameCard from "./gameCard"

export default function AppMain() {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col mt-3">
                                <GameCard title={'Red Dead Redemption 2'} />
                            </div>
                            <div className="col mt-3">
                                <GameCard title={'God of War'} />
                            </div>
                            <div className="The Witcher 3">
                                <GameCard title={'Red Dead Redemption 2'} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
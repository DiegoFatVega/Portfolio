export default function AppMain({ GamesData, GameCard }) {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            {GamesData.map(data => <GameCard title={data.title} platform={data.platforms} key={data.id} />)}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
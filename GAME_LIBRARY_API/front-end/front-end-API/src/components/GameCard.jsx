import rdr2 from "../assets/red-death-redemption.png"

export default function gameCard(diego) {
    console.log(diego)
    return (
        <>
            <div className="card">
                <img src={rdr2} alt="" style={{ height: '400px', width: 'auto' }} />
                <h3> Game Title</h3>
            </div>
        </>
    )
}
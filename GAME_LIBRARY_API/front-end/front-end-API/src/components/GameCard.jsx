import rdr2 from "../assets/red-death-redemption.png"

export default function gameCard({ title, platform }) {

    return (
        <>
            <div className="col mt-3 mb-3">
                <div className="card">
                    <img src="https://picsum.photos/seed/picsum/400/500" alt="" style={{ height: '400px', width: '500' }} />
                    <h3>{title}</h3>
                    <ul>
                        {platform.map(platform => <li key={platform}>{platform}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}
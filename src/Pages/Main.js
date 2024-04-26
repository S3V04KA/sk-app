import Card from "../Components/Card";
import './Main.css';

const Main = () => {
    const data = []
    for (let i = 0; i < 100; i++){
        data.push(i);
    }

    return(
        <div className="Main">
            {data.map((v) => {
                return <Card key={v} imageUrl={'https://i.kickstarter.com/assets/044/292/921/e415081fe306674ce3dd4c6f023b3cc5_original.JPG?anim=false&fit=cover&gravity=auto&height=198&origin=ugc&q=92&width=352&sig=PsVNzNuFqQQ6D7tTnKBBe9b2DC4PNNwh5yR0Fe1kpjw%3D'} author={'test'} name={'Test'}/>
            })}
        </div>
    )
}

export default Main;
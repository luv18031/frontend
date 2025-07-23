import Intro from "./Intro";
import Matrics from "./Matrics";
import MusicDistribution from "./MusicDistribution";
import Navbar from "./Navbar";

function Home(){
    return (
        <div>
            <Navbar />
            <MusicDistribution />  
            <Matrics />
            <Intro />
        </div>
    )
}

export default Home;
import Banner from "../Banner/Banner";
import Collections from "../Collection/Collections";

const Home = () => {
    return (
        <div>
            <div className="fixed inset-0 w-full h-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div>
            <Banner></Banner>
            <Collections></Collections>
        </div>
    );
};

export default Home;
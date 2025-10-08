import useApp from '../Hooks/useApp';
import HomeSkeleton from '../Components/HomeSkeleton';
import Banner from '../Components/Banner';
import TrendingApps from '../Components/TrendingApps';

const Home = () => {
    const { loading } = useApp();
    if (loading) return <HomeSkeleton />;
    return (
        <div>
            <Banner />
            <TrendingApps />
        </div>
    ); 
};

export default Home;
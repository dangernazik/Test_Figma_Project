import Navbar from "../Navbar.jsx";
import MainPart from "../MainPart.jsx";
import PostsList from "../PostsList.jsx";

const MainPage = () => {
    return (
        <>
            <Navbar/>
            <div className="relative overflow-hidden">
                <MainPart/>
                <PostsList/>
                <div className={"z-[-1] overflow-hidden rounded-full green__gradient2"}></div>
                <div className={"z-[-1]  rounded-full green__gradient1"}></div>
            </div>

        </>
    );
};

export default MainPage;
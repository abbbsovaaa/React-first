import Footer from "./Footer"
import Header from "./Header"
import SecondHeader from "./SecondHeader"
import TopHeader from "./TopHeader"

const PageContainer = ({ hasBanner, children }) => {
    return (
        <>
            <TopHeader />
            <Header />
            <SecondHeader />
            <Footer/>
       

            {
                hasBanner && <div>

                </div>
            }
            <main>
                {children}
            </main>

        </>
    )
}
export default PageContainer
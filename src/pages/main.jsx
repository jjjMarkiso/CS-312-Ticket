import Header from './header_footer/Header.jsx';
import Footer from './header_footer/Footer.jsx';

function MainPage() {
    return (
        <>
            <Header />

            <main>
                <h1>Welcome to the Main Page</h1>
                <p>This is the content of your website.</p>
            </main>

            <Footer />
        </>
    );
}

export default MainPage;
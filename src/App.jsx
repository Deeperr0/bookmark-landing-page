import DownloadExtension from "./components/DownloadExtension/DownloadExtension";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
	return (
		<>
			<div className="flex flex-col gap-[100px]">
				<Navbar />
				<Hero />
				<Features />
				<DownloadExtension />
				<FAQ />
				<div>
					<Newsletter />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;

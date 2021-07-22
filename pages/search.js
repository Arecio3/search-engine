import Head from "next/head";
import Header from '../components/Header';

function Search() {
    return (
        <div>
        <Head>
            <title>Search Result</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <Header />
        {/* Search Results */}
        </div>
    )
}

export default Search

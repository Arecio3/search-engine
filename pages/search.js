import Head from "next/head";
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from "../keys";
function Search({ results }) {
    console.log(results)
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

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    console.log(API_KEY)
    // Server side rendering
    // Makes a req to google with our credentials and we pass in the search value by the context.query.term
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
    ).then((response) => response.json());

    // Pass the results to client
    return {
        props: {
            results: data
        }
    }
}

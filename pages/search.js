import Head from "next/head";
import { useRouter } from "next/router";
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from  '../Response';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
    const router = useRouter();
    console.log(results);
    return (
        <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <Header />
        {/* Search Results */}
        <SearchResults results={results}/>
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";
    // Server side rendering
    // Makes a req to google with our credentials and we pass in the search value by the context.query.term
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());

    // Pass the results to client
    return {
        props: {
            results: data,
        },
    };
}

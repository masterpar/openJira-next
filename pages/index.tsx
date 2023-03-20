import Head from 'next/head'
import Layout from "../components/layouts/Layout";
import EntryList from "../components/ui/entry/EntryList";


export default function HomePage() {



  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout title="Open Jira">
            <div className="grid grid-cols-3 mt-6 space-x-4 h-[calc(100vh-80px)] font-dm">

                <EntryList status="pending" />

                <EntryList status="in-progress"/>

                <EntryList status="finished"/>

            </div>
        </Layout>

    </>
  )
}

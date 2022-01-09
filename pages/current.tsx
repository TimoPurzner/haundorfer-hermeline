import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import remarkGfm from 'remark-gfm'
import {createClient, EntryCollection} from 'contentful'

interface CurrentEntry {
  title: string;
  createdAt: Date;
  content: any;
}

const CurrentPage: NextPage = () => {

  const [entries, setEntries] = useState<EntryCollection<any>>();

  useEffect(() => {
    const client = createClient({
      space: "sfcgkpq1gmkp",
      accessToken: "TODO:set as env"
    });
    client
      .getEntries()
      .then(entries_req => setEntries(entries_req))
      .then(entries_req => console.log(entries_req))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <main>
      <Head>
        <title>Hermeline | Aktuelles</title>
      </Head>
      <Header/>
      {
        entries?.items.map((item) => 
          <div key={item.fields.createdAt}>{item.fields.createdAt}</div>
        )
      }
    </main>
  )
}

export default CurrentPage

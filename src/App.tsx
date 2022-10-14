import { Header } from "./components/Header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

interface Posts {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string
  },
  content: {
    type: 'paragraph' | 'link'
    content: string
  }[],
  publishedAt: Date
}

const posts:Posts[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/MauricioAraujo1.png',
      name: 'Maurício Araújo',
      role: 'Front-End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Finalizei um projeto do Ignite da Rocketseat. Criei uma aplicação React utilizando Vite, neste projeto fiz uma rede social muito bacana da Rocketseat. O nome do projeto é Devbook 🚀', },
      { type: 'link', content: 'https://github.com/MauricioAraujo1', },
    ],
    publishedAt: new Date('2022-10-03 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Senior Front-end Engineer | Instructor at Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala, DEV 👋', },
      { type: 'paragraph', content: 'E essa dica para criar galeria com CSS sem usar flex ou grid, você sabia?', },
      { type: 'link', content: 'https://github.com/maykbrito', },
    ],
    publishedAt: new Date('2022-10-09 20:00:00'),
  },
  {
    id: 3,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Schell Fernandes',
      role: 'CTO at Rocketseat | Passion for education'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Conhece alguém que se conectaria com nosso propósito aqui na Rocketseat? Manda pra ela 🤗🙌🏻', },
      { type: 'link', content: 'https://github.com/diego3g', },
    ],
    publishedAt: new Date('2022-10-09 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return ( 
            <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


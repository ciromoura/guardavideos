/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import videosRepository from '../../repositories/videos';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [lastVideo, setLastVideo] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });

    videosRepository.getLast()
      .then((lastVideo) => {
        console.log(lastVideo[0].titulo);
        setLastVideo(lastVideo);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);

  return (
    <PageDefault paddingAll={0}>

      {lastVideo.length === 0 && (<div>Loading...</div>)}

      {lastVideo.map((video, indice) => {
        if (indice === 0) {
          return (
            <div key={video.id}>
              <BannerMain
                videoTitle={lastVideo[0].titulo}
                url={lastVideo[0].url}
                videoDescription={lastVideo[0].description}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={video.id}
            category={video}
          />
        );
      })}

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que"
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      /> */}
    </PageDefault>
  );
}

export default Home;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">

      <header className="bg-green-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-4xl text-white">Bem-vindo ao Nosso Projeto</h1>
          <p className="text-lg text-white">Descubra nosso compromisso com alimentos sustentáveis.</p>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conheça Nossos Valores</h2>
          <p className="text-gray-700">
            Aqui no nosso projeto, estamos comprometidos com a promoção de alimentos sustentáveis,
            apoiando agricultores locais e oferecendo produtos orgânicos de alta qualidade.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Galeria de Fotos</h2>
          <div className="max-w-screen-xl mx-auto">
            <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
              <div>
                <img src={img1} alt="Imagem 1" style={{ width: '50%', height: '50%' }} />
              </div>
              <div>
                <img src={img2} alt="Imagem 2" style={{ width: '50%', height: '50%' }} />
              </div>
              <div>
                <img src={img3} alt="Imagem 3" style={{ width: '50%', height: '50%' }} />
              </div>
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
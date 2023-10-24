import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import { Element } from 'react-scroll';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import './Home.css';

const Home = () => {
  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animated');

      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const directionClass = index % 2 === 0 ? 'js-scroll-left' : 'js-scroll-right';

        if (elementTop < window.innerHeight && elementBottom >= 0) {
          element.classList.add(directionClass, 'ativo');
        } else {
          element.classList.remove(directionClass, 'ativo');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);

    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  return (
    <><div className="bg-white">
      <header style={{ background: 'linear-gradient(to right, rgb(16, 185, 129), rgb(101, 163, 13))', backgroundClip: 'text', color: 'transparent' }} className="py-4">
        <div className="container mx-auto">
          <h1 className="text-4xl text-white" style={textShadowStyle}>
            Bem-vindo ao Nosso Projeto
          </h1>
          <p className="text-lg text-white" style={textShadowStyle}>
            Descubra nosso compromisso com alimentos sustentáveis.
          </p>
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
          <div className="max-w-screen-xl mx-auto">
            <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={4000}>
              <div>
                <img src={img1} alt="Imagem 1" style={{ width: '70%', height: '70%' }} />
              </div>
              <div>
                <img src={img2} alt="Imagem 2" style={{ width: '70%', height: '70%' }} />
              </div>
              <div>
                <img src={img3} alt="Imagem 3" style={{ width: '70%', height: '70%' }} />
              </div>
            </Carousel>
          </div>
        </section>
      </main>
    </div>


      <Element name="aboutUs">
        <section className="grid-section js-scroll-left animated">
          <h1 className="titulo">Sobre Nós</h1>
          <p>
            Somos uma plataforma de e-commerce com um propósito claro: combater a fome e promover a alimentação sustentável. Transformamos produtos à venda em marmitas que são distribuídas às pessoas em situação de rua em São Paulo.
          </p>
          <p>
            Acreditamos no poder da diversidade culinária e na valorização das tradições.
          </p>
          <p>
            Em parceria com povos originários e quilombolas, oferecemos produtos sazonais únicos, conectando o coração da nossa missão à riqueza cultural do Brasil.
          </p>
        </section>
      </Element><Element name="mission">
        <section className="grid-section js-scroll-right animated">
          <h1 className="titulo">Missão</h1>
          <p>
            Transformar a fome em esperança, unindo tecnologia e solidariedade.
          </p>
          <p>
            Na Raízes Livres, buscamos erradicar a fome ao oferecer alimentos sustentáveis e sazonais, criando um impacto positivo na vida das pessoas em situação de rua.
          </p>
          <p>
            Nossa missão vai além do fornecimento de refeições; é um compromisso com a dignidade, a diversidade culinária e a construção de comunidades mais fortes.
          </p>
        </section>
      </Element><Element name="vision">
        <section className="grid-section js-scroll-left animated">
          <h1 className="titulo">Visão</h1>
          <p>
            Ser a uma plataforma de e-commerce que utiliza a inovação para promover a segurança alimentar, a sustentabilidade e a valorização das tradições culinárias brasileiras, criando uma sociedade mais justa e inclusiva.
          </p>
        </section>
      </Element></>

  );
}

export default Home;

import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Estudante | USP - Universidade de São Paulo",
    comment:
    "Os cursos de Tecnologia na Price University superaram minhas expectativas. Adquiri conhecimento prático e a didática excepcional tornou a jornada de aprendizado incrível.",
},
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Full stack developer | Quarter ltd.",
    comment:
    "Minha vida deu um salto positivo após cursar Tecnologia na Price University. A metodologia de ensino é impressionante, proporcionando um aprendizado valioso que aplico diariamente.",
},
  {
    name: "Raquel Silva",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Controller | Sul América",
    comment:
    "Recomendo fortemente os cursos de Tecnologia na Price University. Ganhei habilidades essenciais e a didática é tão envolvente que torna o estudo uma experiência enriquecedora.",
}, 
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Junior Developer | Strong",
    comment:
    "A Price University transformou minha abordagem à tecnologia. Os cursos são relevantes e práticos, proporcionando um conhecimento que faz diferença na minha carreira.",
},
  {
    name: "Rosimeire Batista",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Estudante",
    comment:
    "Estou extremamente satisfeito com a qualidade dos cursos de Tecnologia na Price University. A abordagem prática e a didática excepcional são fundamentais para o meu sucesso profissional.",
},
  {
    name: "Gabriela Oliveira",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Analista de Dados",
    comment:
    "Meu tempo na Price University foi transformador. Os cursos de Tecnologia são excepcionais, proporcionando não apenas conhecimento técnico, mas também habilidades cruciais para o mercado de trabalho.",
},
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Nossos Alunos São <span className="text-gradient">Nosso Orgulho</span>{" "}
            <br /> Veja O Que Dizem
          </h3>
          <br />
          <p className={styles.label}>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px]">
        {reviews &&
          reviews.map((i, index) => (
            <div
              key={index}
              className={`mb-12 md:mb-12 lg:mb-12 xl:mb-12 ${
                (index === 0 || index === 2) ? 'md:mt-[60px]' : ''
              }`}
            >
              <ReviewCard item={i} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;

import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        O que é a <span className="text-gradient">Price University?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Você está pronto para levar suas habilidades de programação para o 
          próximo nível? Você encontrou, a Price University é a principal comunidade
          de programação e tecnologia dedicada a ajudar novos entusiastas e programadores
          a alcançarem seus objetivos e atingirem seu pleno potencial.
          <br />
          <br />
          Nós da Price University, conheçemos em primeira mão os desafios que surgem ao aprender
          e crescer na indústria da programação e tecnologia. Por isso, criamos os melhores cursos
          - para fornecer aos novos programadores os recursos e o suporte de que precisam para ter sucesso.
          <br />
          <br />
          Nosso canal no YouTube é repleto de vídeos informativos, desde o básico da programação até técnicas avançadas.
          Mas isso é apenas o começo. Nossos cursos são acessíveis e projetados para oferecer a você educação de alta qualidade
          necessária para ter sucesso na indústria, sem comprometer suas finanças.
          <br />
          <br />
          Na Price, acreditamos que o preço nunca deve ser um obstáculo para alcançar seus sonhos.
          Por isso, nossos cursos têm preços acessíveis - para que qualquer pessoa, independentemente
          de sua situação financeira, possa acessar as ferramentas e o conhecimento necessários para ter sucesso.
          <br />
          <br />
          Somos mais do que apenas uma comunidade - somos uma família.
          Estamos aqui para ajudá-lo a cada passo do caminho, seja você um iniciante ou esteja procurando elevar
          suas habilidades para o próximo nível.
          <br />
          <br />
          Com a Price ao seu lado, nada impede que você alcance o emprego dos seus sonhos.
          Nossos cursos e comunidade fornecerão a orientação, o suporte e a motivação de que
          você precisa para liberar seu potencial e se tornar um mestre da tecnologia.
          <br />
          <br />
          Então, o que você está esperando? Junte-se à família Price hoje mesmo
          e vamos conquistar a indústria da tecnologia juntos! Com nossos cursos acessíveis,
          vídeos informativos e comunidade, o céu é o limite.
        </p>
        <br />
        <h5 className="text-[18px] font-Poppins">
          Equipe Price University
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;

import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import Article from "../Components/Article";


/**
 * 
 * @returns Accueil page component
 */
const Accueil = () => {
  const { auth } = useContext(AuthContext);
  const date = new Date().toLocaleDateString("fr-FR");
  return (
    <>
      <h1>Bienvenue {auth?.name}</h1>
      <Article
        title="Lorem ipsum dolor sit"
        text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio molestias modi dignissimos atque soluta laboriosam aliquid incidunt rerum eveniet facere unde numquam exercitationem est, non hic aperiam illo aut.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est maiores ipsam aliquam dolor pariatur ea, vel quod veniam repellat ratione laudantium voluptatum provident culpa, debitis et fuga porro necessitatibus inventore!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ut aut voluptas sit nesciunt consectetur quis dolores error tempore, impedit sunt libero ipsum facilis dolorum voluptates dolor pariatur minus autem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate tempore nam dignissimos voluptatum veritatis saepe voluptatibus voluptates iusto possimus quos distinctio aliquam asperiores quibusdam ad, quod repudiandae numquam reprehenderit!
      "
        date={date}
      ></Article>

      <Article
        title="Lorem ipsum dolor sit"
        text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio molestias modi dignissimos atque soluta laboriosam aliquid incidunt rerum eveniet facere unde numquam exercitationem est, non hic aperiam illo aut.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est maiores ipsam aliquam dolor pariatur ea, vel quod veniam repellat ratione laudantium voluptatum provident culpa, debitis et fuga porro necessitatibus inventore!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ut aut voluptas sit nesciunt consectetur quis dolores error tempore, impedit sunt libero ipsum facilis dolorum voluptates dolor pariatur minus autem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate tempore nam dignissimos voluptatum veritatis saepe voluptatibus voluptates iusto possimus quos distinctio aliquam asperiores quibusdam ad, quod repudiandae numquam reprehenderit!
      "
        date={date}
      ></Article>

      <Article
        title="Lorem ipsum dolor sit"
        text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio molestias modi dignissimos atque soluta laboriosam aliquid incidunt rerum eveniet facere unde numquam exercitationem est, non hic aperiam illo aut.
      "
        date={date}
      ></Article>

      <p></p>
    </>
  );
};

export default Accueil;

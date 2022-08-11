import Images from '../images/Images.js';

const HomeData = [
    {
        img: Images.articles.bulbasaur,
        alt: 'bulbasaur',
        title: "Pokédex",
        description: "Search the Pokédex for your favorite Pokémon!",
        link: "/pokedex",
        color: "#A32235"
    },
    {
        img: Images.articles.tcg,
        alt: 'trading card game',
        title: "Pokémon Trading Card Game",
        description: "Play the Trading Card Game Online! Simply follow this link.",
        link: "https://www.pokemon.com/us/pokemon-tcg/play-online/download/",
        color: "#A32235"
    },
    {
        img: Images.articles.team,
        alt: 'pokemon team',
        title: "Team Builder",
        description: "Build and get stats about your very own team!",
        link: "/team",
        color: "#A32235"
    },
    {
        img: Images.articles.show,
        alt: 'indigo league titlecard',
        title: "Pokémon Intro",
        description: "It wouldn't be a proper Pokémon fan site without a link to the original intro!",
        link: "https://www.youtube.com/watch?v=rg6CiPI6h2g",
        color: "#A32235"
    }
]

export default HomeData
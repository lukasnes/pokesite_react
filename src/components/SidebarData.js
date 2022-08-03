import React from 'react'
import Images from '../images/Images'

const SidebarData = [
    {
        title: 'Home',
        header: 'Welcome to the Pokémon Fan Page!',
        path: '/',
        icon: Images.icons.home,
        pCName: 'home-text',
        navId: 'home-link',
        lineId: 'home-line',
        color: '#A32235'
    },
    {
        title: 'Pokédex',
        header: 'Search for any Pokémon in the Pokédex!',
        path: '/pokedex',
        icon: Images.icons.dex,
        pCName: 'dex-text',
        navId: 'dex-link',
        lineId: 'dex-line',
        color: '#EF8218'
    },
    {
        title: 'Team Builder',
        header: 'Construct your own team of Pokémon!',
        path: '/team',
        icon: Images.icons.team,
        pCName: 'team-text',
        navId: 'team-link',
        lineId: 'team-line',
        color: '#F8C630'
    },
    {
        title: 'Battle Simulator',
        header: 'Test your team in battle!',
        path: '/battle',
        icon: Images.icons.battle,
        pCName: 'battle-text',
        navId: 'battle-link',
        lineId: 'battle-line',
        color: '#0CCE6B'
    },
    {
        title: 'Poké Forums',
        header: 'Share your teams, and talk to other Pokémon trainers in the forum!',
        path: '/forum',
        icon: Images.icons.forum,
        pCName: 'forum-text',
        navId: 'forum-link',
        lineId: 'forum-line',
        color: '#7AE7C7'
    },
    {
        title: 'Other Poké Pages',
        header: 'Check out these other Pokémon pages!',
        path: '/pages',
        icon: Images.icons.pages,
        pCName: 'pages-text',
        navId: 'pages-link',
        lineId: 'pages-line',
        color: '#306BAC'
    },
    {
        title: 'About Us',
        header: 'More about the creators of this fan page, and our goals!',
        path: '/about',
        icon: Images.icons.about,
        pCName: 'about-text',
        navId: 'about-link',
        lineId: 'about-line',
        color: '#7B6085'
    }
]

export default SidebarData
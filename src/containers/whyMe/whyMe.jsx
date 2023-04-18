import React from 'react'
import Card from '../../components/Card'
import '../../styles/containers/_whyMe.scss'
import PsychologyIcon from '@mui/icons-material/Psychology';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MenuBookIcon from '@mui/icons-material/MenuBook';


const whyMe = () => {

  const psychologyIcon = <PsychologyIcon style={{fontSize: '2.5rem', marginBottom: '8px'}}/>
  const teamWorkIcon = <Diversity3Icon style={{fontSize: '2.5rem', marginBottom: '8px'}}/>
  const bookIcon = <MenuBookIcon style={{fontSize: '2.5rem', marginBottom: '8px'}}/>

  return (
    <div className='whyMe section__padding' id='whyMe'>
      <div className='whyMe__title-container'>
        <div className='title__detail'></div>
        <h3 className='whyMe__title'>Why me?</h3>
      </div>
      <div className='whyMe__container'>
        <Card icon={bookIcon} title='Learning ability' text='Technology is constantly evolving. My passion and curiosity for development drives me to adapt to those changes that keep me up-to-date with the most required technologies. I participate in various communities where I have found people willing to teach without any expectation of reward.' />
        <Card icon={teamWorkIcon} title='Teamwork' text='In my previous jobs, I learned the importance of working in a team. This allowed us not only to share ideas and creative solutions, but also to work more efficiently to achieve our goals. I always try to communicate in the most effective way possible, as I consider it essential in a team.' />
        <Card icon={psychologyIcon} title='Dedication and proactivity' text='In my work as a developer, I aim to anticipate problems and take measures to prevent or solve them before they become major obstacles. When I set a goal, I focus on putting in the necessary effort to achieve it.' />
      </div>
    </div>
  )
}

export default whyMe
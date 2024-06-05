import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
            <div className='widgets__article'>
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon/>
                </div>
                <div className="widget__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    };
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon className='widgets__infoIcon'/>
        </div>
        {newsArticle("Naina is Here", "Top new - 9099 readers")}
        {newsArticle("Naina is Here", "Top new - 9099 readers")}
        {newsArticle("Naina is Here", "Top new - 9099 readers")}
        {newsArticle("Naina is Here", "Top new - 9099 readers")}
        {newsArticle("Naina is Here", "Top new - 9099 readers")}
        {newsArticle("Naina is Here", "Top new - 9099 readers")}
        {newsArticle("Naina is Here", "Top new - 9099 readers")}
        {newsArticle("Naina is Here", "Top new - 9099 readers")}

    </div>
  )
}

export default Widgets
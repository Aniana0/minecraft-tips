import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export default function CategoryButton({ link, img, title }) {
  return (
    <Link to={link}>
      <CategoryContainer>
        <div className="img-container">
          <img src={img} alt={title} />
        </div>
        <div className='title-box'>
          <div className="titlebox-tail"></div>
          <div className="title-main">
            <p>제목이 들어갈 곳</p>
          </div>
        </div>
      </CategoryContainer>
    </Link>
  )
}

const CategoryContainer = styled.div`
  width: 200px;
  height: auto;
  text-align: center;
  .img-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    img{
      width: 60%;
      transition: width 0.2s ease-in-out;
    }
  }
  &:hover{
    img{
      width: 100%;
    }
  }
`

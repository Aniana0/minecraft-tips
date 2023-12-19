import React from 'react'
import CategoryButton from './CategoryButton'
import { styled } from 'styled-components'

export default function Categories() {
  return (
    <SelectCategoryContainer>
      <CategoryButton link={"/signup"} img={"./images/testButtonImg.png"} title={"test"} />
      <CategoryButton link={"/"} img={"./images/testButtonImg.png"} title={"test"} />
      <CategoryButton link={"/"} img={"./images/testButtonImg.png"} title={"test"} />
      <CategoryButton link={"/"} img={"./images/testButtonImg.png"} title={"test"} />
    </SelectCategoryContainer>
  )
}

const SelectCategoryContainer = styled.div`
  display: flex;
  gap: 20px;
`
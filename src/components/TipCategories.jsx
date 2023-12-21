import React from 'react'
import TipCategoryButton from './TipCategoryButton'
import { styled } from 'styled-components'

export default function TipCategories() {
  return (
    <SelectCategoryContainer>
      <TipCategoryButton link={"/signup"} img={"./images/testButtonImg.png"} title={"test"} />
      <TipCategoryButton link={"/"} img={"./images/testButtonImg.png"} title={"test"} />
      <TipCategoryButton link={"/"} img={"./images/testButtonImg.png"} title={"test"} />
      <TipCategoryButton link={"/"} img={"./images/testButtonImg.png"} title={"test"} />
    </SelectCategoryContainer>
  )
}

const SelectCategoryContainer = styled.div`
  display: flex;
  gap: 20px;
`
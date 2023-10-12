import React from 'react'
import { ButtonView } from './index.styles'
interface BtnComponentInterface {
    children?: React.ReactNode,
    onBtnClick: () => void;
}
export const ButtonComponent:React.FC<BtnComponentInterface> = (props) => {
  return (
    <ButtonView onClick={props.onBtnClick}>{props.children}</ButtonView>
  )
}

import React from 'react'
import { ButtonView } from './index.styles'
interface BtnComponentInterface {
    children?: React.ReactNode,
    onBtnClick: (rowId?:number) => void;
    rowId?:number;
}
export const ButtonComponent:React.FC<BtnComponentInterface> = (props) => {
  
  return (
    <ButtonView onClick={()=>props.onBtnClick(props.rowId)}>{props.children}</ButtonView>
  )
}

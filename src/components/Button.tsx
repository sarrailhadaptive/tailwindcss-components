import { ButtonType } from "../assets/types"

export default function Button({ text, style, disabled = "" }: ButtonType) {
  console.log("testing")

  return (
    <button className={style + disabled}>{text}</button>
  )
}
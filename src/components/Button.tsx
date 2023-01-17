
interface Button {
  text: string
  style: string
  disabled?: string
}

export default function Button({ text, style, disabled = "" }: Button) {

  return (
    <button className={style + disabled}>{text}</button>
  )
}